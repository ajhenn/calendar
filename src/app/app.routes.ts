import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  {
    path: 'sign-in',
    loadComponent: () => import('./widgets/sign-in/sign-in.component').then(m => m.SignInComponent)
  },
  {
    path: 'calendar',
    loadComponent: () => import('./widgets/calendar/calendar.component').then(m => m.CalendarComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./widgets/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  { path: '**', redirectTo: '/sign-in' }
];
