import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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
import { colorForName, parseLocalDate } from '../../utils/calendar.util';
import { CalendarService } from '../../services/calendar.service';
import { CalendarDialogEditComponent, CalendarDialogResult } from './calendar-dialog-edit/calendar-dialog-edit.component';
import { CALENDAR_REASONS, CALENDAR_TEAM, DEMO_TEAM } from '../../models/calendar-event.model';
import { AuthService } from '../../services/auth-state.service';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

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
  private route = inject(ActivatedRoute);
  private breakpointObserver = inject(BreakpointObserver);

  calendarVisible = signal(false);
  isMobile = signal(false);
  isDemoMode = computed(() => this.calendarService.isDemoMode());
  teamOptions = computed(() => this.isDemoMode() ? DEMO_TEAM : CALENDAR_TEAM);
  userName = signal('');
  timer = signal(3);

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
      right: ''
    },
    footerToolbar: {
      left: '',
      center: 'dayGridMonth,listWeek,dashboard',
      right: ''
    },
    buttonText: {
      today: 'Today',
      month: 'Month',
      list: 'List',
      prev: '<',
      next: '>'
    },
    customButtons: {
      dashboard: {
        text: 'Dashboard',
        click: () => this.store.dispatch(CalendarActions.routerGoToDashboard())
      }
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
    this.observeScreenSize();

    const isDemo = this.route.snapshot.queryParams['demo'] === 'true';
    if (isDemo) {
      this.calendarService.enableDemoMode();
      await this.calendarService.fetchEntries();
      this.calendarVisible.set(true);
      return;
    }

    const user = this.authService.getAuthState();
    if (user.isLoggedIn) {
      await this.calendarService.fetchEntries();
      this.userName.set(user.user?.displayName ?? '');
      this.calendarVisible.set(true);
      const timerId = setInterval(() => {
        this.timer.update((val) => {
          if (val <= 1) clearInterval(timerId);
          return Math.max(0, val - 1);
        });
      }, 1000);
      this.destroyRef.onDestroy(() => clearInterval(timerId));
    } else {
      this.store.dispatch(CalendarActions.routerGoToSignIn({ isTimedOut: true }));
    }
  }

  private observeScreenSize(): void {
    this.breakpointObserver.observe([Breakpoints.Handset, '(max-width: 767px)'])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(result => {
        const mobile = result.matches;
        this.isMobile.set(mobile);

        this.calendarOptions.update(options => ({
          ...options,
          initialView: 'dayGridMonth',
          headerToolbar: {
            left: 'prev,today,next',
            center: 'title',
            right: mobile ? '' : 'dayGridMonth,listWeek,dashboard'
          },
          footerToolbar: mobile ? {
            left: '',
            center: 'dayGridMonth,listWeek,dashboard',
            right: ''
          } : {
            left: '',
            center: '',
            right: ''
          },
          buttonText: {
            today: 'Today',
            month: 'Month',
            list: 'List',
            dashboard: 'Dashboard',
            prev: '<',
            next: '>'
          },
          navLinks: true,
          aspectRatio: mobile ? 0.65 : 1.35,
          contentHeight: mobile ? 'auto' : undefined,
          dayMaxEvents: mobile ? 2 : true,
          eventDisplay: 'block',
          views: {
            dayGridMonth: {
              dayMaxEvents: mobile ? 1 : true,
              fixedWeekCount: false,
              titleFormat: { year: 'numeric', month: 'short' }
            }
          }
        }));
      });
  }

  private toFullCalendarEnd(date: string | Date): string {
    // stored end is inclusive; FullCalendar expects exclusive end for all-day events.
    const d = parseLocalDate(date);
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  }

  private readonly syncCalendarEventsEffect = effect(() => {
    if (!this.calendarVisible()) {
      return;
    }

    const eventInputs: EventInput[] = this.calendarService.entries().map(entry => ({
      id: entry.id,
      title: `${entry.name} - ${entry.reason}`,
      start: entry.start_date,
      end: this.toFullCalendarEnd(entry.end_date),
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

    // FullCalendar gives end as exclusive for date range selection.
    // Convert to inclusive end date so users see the expected day in UI.
    const inclusiveEndDate = selectInfo.end ? new Date(selectInfo.end) : new Date(selectInfo.start);
    if (selectInfo.end) {
      inclusiveEndDate.setDate(inclusiveEndDate.getDate() - 1);
    }
    const inclusiveEndStr = inclusiveEndDate.toISOString().split('T')[0];

    this.dialog.open(CalendarDialogAddComponent, {
      data: {
        start: selectInfo.startStr,
        end: inclusiveEndStr,
        team: this.teamOptions(),
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
        const endDate = saved?.data?.end_date ?? (end as Date).toISOString().split('T')[0];
        calendarApi.addEvent({
          id: saved?.data?.id ?? uuid4(),
          title: `${saved?.data?.name || name} - ${saved?.data?.reason || reason}`,
          start: saved?.data?.start_date ?? start,
          end: this.toFullCalendarEnd(endDate),
          allDay: true,
          backgroundColor: colorForName(saved.data?.name ?? name),
          borderColor: colorForName(saved.data?.name ?? name),
          extendedProps: { comments: saved?.data?.comments ?? (comments || '') }
        });
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
        team: this.teamOptions(),
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
}
