import { Component, computed, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../../services/auth-state.service';
import * as CalendarActions from '../../store/calendar.actions';
import { Store } from '@ngrx/store';
import { SnackBarComponent } from '../snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { signal } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule,
    MatMenuModule, RouterLink, MatTooltipModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  private readonly authService = inject(AuthService);
  private readonly store = inject(Store);
  private readonly snackBar = inject(MatSnackBar);
  private readonly router = inject(Router);
  private readonly calendarService = inject(CalendarService);

  currentRoute = signal<string>('');

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute.set(event.url);
      });
  }

  showSignOut = computed(() => {
    const authState = this.authService.getAuthState();
    return authState.isLoggedIn && !this.isDemoMode();
  });

  isDemoMode = computed(() => this.calendarService.isDemoMode());

  isCalendarActive = computed(() => this.currentRoute().includes('/calendar'));
  isDashboardActive = computed(() => this.currentRoute().includes('/dashboard'));


  logout() {
    this.authService.logout();
    this.store.dispatch(CalendarActions.routerGoToSignIn({isTimedOut: false}));
  }

  donateToDeveloper() {
    window.open('https://paypal.me/emissionbassmusic?country.x=US&locale.x=en_US', '_blank');
  }

  shareSite() {
    const siteUrl = window.location.href;
    navigator.clipboard.writeText(siteUrl);
    this.openSnackBar();
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 3000,
      data: 'Website link copied!'
    });
  }
}
