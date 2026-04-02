import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, EventInput } from '@fullcalendar/core';
import * as CalendarActions from '../../store/calendar.actions';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { v4 as uuid4 } from 'uuid';
import { CalendarDialogAddComponent } from './calendar-dialog-add/calendar-dialog-add.component';
import { filter } from 'rxjs';
import { colorForName } from '../../utils/calendar.util';
import { CalendarService } from '../../services/calendar.service';
import { CalendarDialogEditComponent, CalendarDialogResult } from './calendar-dialog-edit/calendar-dialog-edit.component';
import { CALENDAR_REASONS, CALENDAR_TEAM } from '../../models/calendar-event.model';
import { AuthService } from '../../services/auth-state.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-calendar',
  imports: [FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent implements OnInit {

  private calendarService = inject(CalendarService);
  private dialog = inject(MatDialog);
  private destroyRef = inject(DestroyRef);
  private store = inject(Store);
  private authService = inject(AuthService);

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
    events: [],
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

  async ngOnInit(): Promise<void> {
    const user = this.authService.getAuthState();
    if (user.isLoggedIn) {
      await this.calendarService.fetchEntries();
      this.calendarVisible.set(true);
    } else {
      this.store.dispatch(CalendarActions.routerGoToSignIn({ isTimedOut: true }));
    }
  }

  private readonly syncCalendarEventsEffect = effect(() => {
    if (!this.calendarVisible()) {
      return;
    }

    const eventInputs: EventInput[] = this.calendarService.entries().map(entry => ({
      id: entry.id,
      title: `${entry.name} - ${entry.reason}`,
      start: entry.start_date,
      end: entry.end_date,
      allDay: true,
      backgroundColor: colorForName(entry.name),
      borderColor: colorForName(entry.name),
      extendedProps: { comments: entry.comments }
    }));

    this.calendarOptions.update(options => ({
      ...options,
      events: eventInputs,
    }));
  });

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
        // events are rendered reactively from calendarService.entries()
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
        await this.calendarService.updateEntry(entry.id, result.payload);
      } else if (result.action === 'delete') {
        await this.calendarService.deleteEntry(entry.id);
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

}
