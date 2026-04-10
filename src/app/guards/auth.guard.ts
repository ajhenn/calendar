import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth-state.service';
import { CalendarService } from '../services/calendar.service';
import { Store } from '@ngrx/store';
import * as CalendarActions from '../store/calendar.actions';

export const authGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const calendarService = inject(CalendarService);
  const store = inject(Store);

  // 1. Handle Demo Mode bypass
  if (route.queryParams['demo'] === 'true') {
    calendarService.enableDemoMode();
    return true;
  }

  // 2. Handle Authenticated User
  if (authService.getAuthState().isLoggedIn) {
    return true;
  }

  // 3. Unauthorized: Redirect to sign-in
  store.dispatch(CalendarActions.routerGoToSignIn({ isTimedOut: true }));
  return false;
};
