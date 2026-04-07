import { Injectable, inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as CalendarActions from './calendar.actions';

@Injectable()
export class CalendarEffects {
  private actions$ = inject(Actions);
  private router = inject(Router);

  routerGoToCalendar$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CalendarActions.routerGoToCalendar),
        tap(() => this.router.navigate(['/home'], { queryParamsHandling: 'merge' }))
      ),
    { dispatch: false }
  );

  routerGoToDashboard$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CalendarActions.routerGoToDashboard),
        tap(() => this.router.navigate(['/dashboard'], { queryParamsHandling: 'merge' }))
      ),
    { dispatch: false }
  );

  routerGoToSignIn$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CalendarActions.routerGoToSignIn),
        tap((data) => {
          let extras: NavigationExtras = {};
          if (data?.isTimedOut) {
            extras.state = { isTimedOut: data.isTimedOut || false };
          }
          this.router.navigate(['/sign-in'], extras);
        })
      ),
    { dispatch: false }
  );
}