import { Injectable, signal } from '@angular/core';
import { CalendarEvent } from '../models/calendar-event.model';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  private readonly demoEntries = signal<CalendarEvent[]>([
    {
      id: 'demo-1',
      name: 'John',
      reason: 'Vacation',
      start_date: '2026-04-02',
      end_date: '2026-04-04',
      comments: 'Spring break vacation',
      created: '2026-03-15T10:00:00Z'
    },
    {
      id: 'demo-2',
      name: 'Jessica',
      reason: 'Called In',
      start_date: '2026-04-03',
      end_date: '2026-04-03',
      comments: 'Feeling under the weather',
      created: '2026-04-02T08:30:00Z'
    },
    {
      id: 'demo-3',
      name: 'Henry',
      reason: 'Leaving Early',
      start_date: '2026-04-05',
      end_date: '2026-04-05',
      comments: 'Doctor appointment',
      created: '2026-04-01T14:20:00Z'
    },
    {
      id: 'demo-4',
      name: 'Emily',
      reason: 'Vacation',
      start_date: '2026-04-08',
      end_date: '2026-04-12',
      comments: 'Family trip',
      created: '2026-03-20T16:45:00Z'
    },
    {
      id: 'demo-5',
      name: 'John',
      reason: 'Arriving Late',
      start_date: '2026-04-10',
      end_date: '2026-04-10',
      comments: 'Car trouble',
      created: '2026-04-10T07:15:00Z'
    },
    {
      id: 'demo-6',
      name: 'Jessica',
      reason: 'Billing',
      start_date: '2026-04-15',
      end_date: '2026-04-15',
      comments: 'Client meeting',
      created: '2026-04-12T11:30:00Z'
    },
    {
      id: 'demo-7',
      name: 'Henry',
      reason: 'Called In',
      start_date: '2026-04-18',
      end_date: '2026-04-18',
      comments: 'Sick child',
      created: '2026-04-18T06:45:00Z'
    },
    {
      id: 'demo-8',
      name: 'Emily',
      reason: 'Leaving Early',
      start_date: '2026-04-22',
      end_date: '2026-04-22',
      comments: 'Personal errands',
      created: '2026-04-20T13:10:00Z'
    },
    {
      id: 'demo-9',
      name: 'John',
      reason: 'Vacation',
      start_date: '2026-04-25',
      end_date: '2026-04-28',
      comments: 'Weekend getaway',
      created: '2026-04-15T09:20:00Z'
    },
    {
      id: 'demo-10',
      name: 'Jessica',
      reason: 'Arriving Late',
      start_date: '2026-04-30',
      end_date: '2026-04-30',
      comments: 'Traffic delay',
      created: '2026-04-30T08:00:00Z'
    }
  ]);

  getDemoEntries(): CalendarEvent[] {
    return this.demoEntries();
  }
}