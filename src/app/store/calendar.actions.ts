import { createAction, props } from '@ngrx/store';

export const loadCalendar = createAction('[Calendar] Load Calendar');

export const loadCalendarSuccess = createAction(
  '[Calendar] Load Calendar Success',
  props<{ lists: any[] }>()
);

export const loadCalendarError = createAction(
  '[Calendar] Load Calendar Error',
  props<{ error: string }>()
);

export const routerGoToCalendar = createAction(
  '[Router] Go To Calendar'
);

export const routerGoToDashboard = createAction(
  '[Router] Go To Dashboard'
);

export const routerGoToSignIn = createAction(
  '[Router] Go To Sign In',
  props<{ isTimedOut?: boolean }>()
);

export const routerGoToResetPassword = createAction(
  '[Router] Go To Reset Password'
);