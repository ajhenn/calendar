import { Component, computed, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../../services/auth-state.service';
import * as CalendarActions from '../../store/calendar.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  private readonly authService = inject(AuthService);
  private readonly store = inject(Store);
  showSignOut = computed(() => {
    const authState = this.authService.getAuthState();
    return authState.isLoggedIn;
  });

  logout() {
    this.authService.logout();
    this.store.dispatch(CalendarActions.routerGoToCalendar());
  }

  donateToDeveloper() {
    window.open('https://paypal.me/emissionbassmusic?country.x=US&locale.x=en_US', '_blank');
  }

  shareSite() {
    const siteUrl = window.location.href;
    console.log('Sharing site URL:', siteUrl);
    navigator.clipboard.writeText(siteUrl);
    alert('Site URL copied to clipboard! - ' + siteUrl);
  }
}
