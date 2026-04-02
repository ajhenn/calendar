import { createReducer, on } from '@ngrx/store';
import * as CalendarActions from './calendar.actions';

export interface CalendarState {
  lists: any[];
  loading: boolean;
  error: string | null;
}

const initialState: CalendarState = {
  lists: [],
  loading: false,
  error: null
};

export const listReducer = createReducer(
  initialState,
  on(CalendarActions.loadCalendar, (state) => ({ ...state, loading: true })),
  on(CalendarActions.loadCalendarSuccess, (state, { lists }) => ({
    ...state,
    lists,
    loading: false
  })),
  on(CalendarActions.loadCalendarError, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);
