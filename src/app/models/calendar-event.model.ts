export interface CalendarEvent {
    id: string;
    name: string;
    reason: string;
    start_date: string | Date;
    end_date: string | Date;
    comments?: string;
    created?: string;
}

export const CALENDAR_TEAM = [
    'Alex',
    'Sam',
    'Kristie',
    'Krista',
    'Everyone'
  ];

export const CALENDAR_REASONS = [
    'Vacation',
    'Called In',
    'Leaving Early',
    'Arriving Late',
    'Leaving & Coming Back',
    'Off',
    'Billing'
  ];

export const CALENDAR_OFFICE_REASONS = [
    'Staff Meeting',
    'Office Closed',
    'Office Closing Early'
  ];

export const DEMO_TEAM = [
  'John',
  'Kate',
  'Will',
  'Emily'
];