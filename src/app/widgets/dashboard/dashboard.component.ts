import { Component, computed, inject, OnInit, signal } from '@angular/core';
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

    entries.forEach(entry => {
      const person = entry.name;
      const reason = entry.reason;

      if (!analytics.has(person)) {
        analytics.set(person, new Map());
      }

      const personReasons = analytics.get(person)!;
      personReasons.set(reason, (personReasons.get(reason) ?? 0) + 1);
    });

    return Array.from(analytics, ([person, reasonMap]) => ({
      person,
      vacation: reasonMap.get('Vacation') ?? 0,
      sickDays: reasonMap.get('Called In') ?? 0,
      leaveEarly: reasonMap.get('Leaving Early') ?? 0,
      arriveLate: reasonMap.get('Arriving Late') ?? 0,
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
