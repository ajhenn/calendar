import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth-state.service';
import { CalendarService } from '../services/calendar.service';
import { Store } from '@ngrx/store';
import * as CalendarActions from '../store/calendar.actions';
import { supabase } from '../supabase.client';
import { SignInService } from '../services/sign-in.service';

export const authGuard: CanActivateFn = async (route) => {
  const authService = inject(AuthService);
  const calendarService = inject(CalendarService);
  const signInService = inject(SignInService);
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

  // 3. Check if session exists
  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user) {
    store.dispatch(CalendarActions.routerGoToSignIn({ isTimedOut: true }));
    return false;
  }

  // 4. Resolve ownership if session exists
  const { isOwner, currentOwnerId } = await signInService.resolveOwnership(session.user.id);
    authService.login({
      id: session.user.id,
      email: session.user.email || '',
      displayName: session.user.user_metadata?.['display_name'] || undefined
    },
      isOwner,
      currentOwnerId
    );
  return true;
};
