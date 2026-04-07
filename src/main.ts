import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { listReducer } from './app/store/calendar.reducer';
import { CalendarEffects } from './app/store/calendar.effects';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      }),
      withHashLocation()
    ),
    provideStore({ calendar: listReducer }),
    provideEffects([CalendarEffects])
  ]
})
  .catch((err) => console.error('bootstrapApplication error: ', err));
