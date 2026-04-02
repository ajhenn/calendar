import { afterNextRender, ChangeDetectorRef, Component, DestroyRef, effect, inject, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { v4 as uuid4 } from 'uuid';
import { CalendarDialogAddComponent } from './calendar-dialog-add/calendar-dialog-add.component';
import { filter } from 'rxjs';
import { colorForName } from '../../utils/pto-colors.util';
import { CalendarService } from '../../services/calendar.service';
import { CalendarDialogEditComponent, CalendarDialogResult } from './calendar-dialog-edit/calendar-dialog-edit.component';
import { CALENDAR_REASONS, CALENDAR_TEAM } from '../../models/calendar-event.model';

@Component({
  selector: 'app-calendar',
  imports: [FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {

  private calendarRef = viewChild.required(FullCalendarComponent);
  private calendarService = inject(CalendarService);
  private dialog = inject(MatDialog);
  private destroyRef = inject(DestroyRef);

  calendarVisible = signal(false);
  calendarOptions = signal<CalendarOptions>({
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listWeek'
    },
    initialView: 'dayGridMonth',
    // initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: (selectInfo: DateSelectArg) => this.handleDateSelect(selectInfo),
    eventClick: (clickInfo: EventClickArg) => this.handleEventClick(clickInfo),
    // select: this.handleDateSelect.bind(this),
    // eventClick: this.handleEventClick.bind(this),
    // eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  });
  currentEvents = signal<EventApi[]>([]);

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  async ngOnInit(): Promise<void> {
    await this.calendarService.fetchEntries();
    this.calendarVisible.set(true);
    this.loadEntries(); // fix so table renders properly
  }

  // private readonly loadEntriesEffect = effect(() => {
  //   if (this.calendarVisible()) {
  //     this.loadEntries();
  //   }
  // });

  private loadEntries(): void {
    const calendarApi = this.calendarRef().getApi();
      this.calendarService.entries().forEach(entry => {
        calendarApi.addEvent({
          id: entry.id,
          title: `${entry.name} - ${entry.reason}`,
          start: entry.start_date,
          end: entry.end_date,
          allDay: true,
          backgroundColor: colorForName(entry.name),
          borderColor: colorForName(entry.name),
          extendedProps: { comments: entry.comments }
        })
      });
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection

    this.dialog.open(CalendarDialogAddComponent, {
      data: {
        start: selectInfo.startStr, 
        end: selectInfo.endStr,
        team: CALENDAR_TEAM,
        reasons: CALENDAR_REASONS
      }
    })
    .afterClosed()
    .pipe(
      filter(result => !!result?.name),
      takeUntilDestroyed(this.destroyRef)
    )
    .subscribe(async ({ name, reason, start, end, comments }) => {
      console.log('Received new event data from dialog: ', { name, reason, start, end, comments });
      const saved = await this.calendarService.addEntry({
        name,
        reason,
        start_date: (start as Date).toISOString().split('T')[0], // only keep the date part for all-day events
        end_date: (end as Date).toISOString().split('T')[0], // only keep the date part for all-day events
        comments
      });

      if (saved) {
        calendarApi.addEvent({
          id: saved?.data?.id ?? uuid4(),
          title: `${saved?.data?.name || name} - ${saved?.data?.reason || reason}`,
          start: saved?.data?.start_date ?? start,
          end: saved?.data?.end_date ?? end,
          allDay: true,
          backgroundColor: colorForName(saved.data?.name ?? name),
          borderColor: colorForName(saved.data?.name ?? name),
          extendedProps: { comments: saved?.data?.comments ?? (comments || '') }
        })
      }
    });
  }

  handleEventClick(clickInfo: EventClickArg) {
    console.log('clicked event = ', clickInfo.event);
    const entry = this.calendarService.entries().find(e => e.id === clickInfo.event.id);
    if (!entry) {
      console.error('Could not find calendar entry for event id ', clickInfo.event.id);
      return;
    }

    this.dialog.open(CalendarDialogEditComponent, {
      data: {
        event: entry,
        team: CALENDAR_TEAM,
        reasons: CALENDAR_REASONS
      }
    })
    .afterClosed()
    .pipe(
      filter((result: CalendarDialogResult | undefined): result is CalendarDialogResult => !!result?.action),
      takeUntilDestroyed(this.destroyRef)
    )
    .subscribe(async (result: CalendarDialogResult) => {
      if (result.action === 'edit' && result.payload) {
        const updated = await this.calendarService.updateEntry(entry.id, result.payload);
        if (updated) {
          clickInfo.event.setProp('title', `${updated?.data?.name || result.payload.name} - ${updated?.data?.reason || result.payload.reason}`);
          clickInfo.event.setStart(updated?.data?.start_date ?? result.payload.start_date as unknown as Date);
          clickInfo.event.setEnd(updated?.data?.end_date ?? result.payload.end_date as unknown as Date);
          clickInfo.event.setExtendedProp('comments', updated?.data?.comments ?? result.payload.comments);
        }
      } else if (result.action === 'delete') {
        await this.calendarService.deleteEntry(entry.id);
        clickInfo.event.remove();
      }
    });
  }

  // handleWeekendsToggle() {
  //   this.calendarOptions.update((options) => ({
  //     ...options,
  //     weekends: !options.weekends,
  //       end: selectInfo.endStr,
  //       allDay: selectInfo.allDay
  //     });
  //   }
  

  // handleWeekendsToggle() {
  //   this.calendarOptions.update((options) => ({
  //     ...options,
  //     weekends: !options.weekends,
  //   }));
  // }

  // handleDateSelect(selectInfo: DateSelectArg) {
  //   const title = prompt('Please enter a new title for your event');
  //   const calendarApi = selectInfo.view.calendar;

  //   calendarApi.unselect(); // clear date selection

  //   if (title) {
  //     calendarApi.addEvent({
  //       id: uuid4(),
  //       title,
  //       start: selectInfo.startStr,
  //       end: selectInfo.endStr,
  //       allDay: selectInfo.allDay
  //     });
  //   }
  // }

  // handleEventClick(clickInfo: EventClickArg) {
  //   if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
  //     clickInfo.event.remove();
  //   }
  // }

  handleEvents(events: EventApi[]) {
    this.currentEvents.set(events);
    this.changeDetector.detectChanges(); // workaround for pressionChangedAfterItHasBeenCheckedError
  }


}
