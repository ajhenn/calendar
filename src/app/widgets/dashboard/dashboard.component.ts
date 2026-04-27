import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CalendarService } from '../../services/calendar.service';
import { CalendarEvent } from '../../models/calendar-event.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MatTabsModule, MatCardModule,
    MatGridListModule, MatIconModule, MatButtonModule, DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  private calendarService = inject(CalendarService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const isDemo = this.route.snapshot.queryParams['demo'] === 'true';
    if (isDemo) {
      this.calendarService.enableDemoMode();
    }
  }

  selectedPerson = signal<string | null>(null);
  selectedReason = signal<string | null>(null);

  detailedEntries = computed(() => {
    const person = this.selectedPerson();
    const reason = this.selectedReason();
    if (!person || !reason) return [];

    return this.calendarService.entries().filter(entry =>
      entry.name === person && entry.reason === reason
    );
  });

  // Aggregate: person + count by reason
  analyticsData = computed(() => {
    const entries = this.calendarService.entries();
    const analytics = new Map<string, Map<string, number>>();
    const MS_PER_DAY = 1000 * 60 * 60 * 24;

    for (const entry of entries) {
      const person = entry.name;
      const reason = entry.reason;

      if (!analytics.has(person)) {
        analytics.set(person, new Map());
      }
      const personReasons = analytics.get(person)!;
      
      const start = new Date(entry.start_date).getTime();
      const end = new Date(entry.end_date).getTime();
      // Calculate inclusive days: (difference / msPerDay) + 1
      // This ensures that an event on the same day counts as 1, and Mon-Tue counts as 2.
      const dayCount = Math.round(Math.abs(end - start) / MS_PER_DAY) + 1;

      personReasons.set(reason, (personReasons.get(reason) ?? 0) + dayCount);
    }

    return Array.from(analytics, ([person, reasonMap]) => ({
      person,
      vacation: reasonMap.get('Vacation') ?? 0,
      sickDays: reasonMap.get('Called In') ?? 0,
      leaveEarly: reasonMap.get('Leaving Early') ?? 0,
      arriveLate: reasonMap.get('Arriving Late') ?? 0,
      off: reasonMap.get('Off') ?? 0,
      billing: reasonMap.get('Billing') ?? 0,
      // Add more reason types as needed
      all: reasonMap
    }));
  });

  showDetailsForReason = computed(() => {
    return this.selectedPerson() !== null &&
      this.selectedReason() !== null &&
      this.detailedEntries().length > 0;
  });

  setSelectedPerson(person?: string | null) {
    const normalized = person || null;
    this.selectedPerson.set(normalized);
    this.selectedReason.set(null);
  }

  setSelectedReason(reason?: string | null, person?: string | null) {
    const normalizedPerson = person || null;
    const normalizedReason = reason || null;
    this.selectedPerson.set(normalizedPerson);
    this.selectedReason.set(normalizedReason);
  }

  isSameDay(entry: CalendarEvent): boolean {
    const start = new Date(entry.start_date);
    const end = new Date(entry.end_date);
    return start.toISOString().slice(0, 10) === end.toISOString().slice(0, 10);
  }
}
