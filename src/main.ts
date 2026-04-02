import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { listReducer } from './app/store/calendar.reducer';
import { CalendarEffects } from './app/store/calendar.effects';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideStore({ calendar: listReducer }),
    provideEffects([CalendarEffects])
  ]
})
  .catch((err) => console.error(err));
