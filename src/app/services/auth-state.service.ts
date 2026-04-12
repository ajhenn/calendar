import { Injectable, signal } from '@angular/core';

export interface User { id: string; email: string; displayName?: string; }
export interface AuthState { isLoggedIn: boolean; user?: User; isOwner?: boolean, currentOwnerId?: string }

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _authState = signal<AuthState>({ isLoggedIn: false });
  getAuthState = this._authState.asReadonly();

  login(user: User, isOwner = false, currentOwnerId = '') {
    this._authState.update(s => ({
      ...s,
      isLoggedIn: true,
      user,
      isOwner,
      currentOwnerId
    }));
  }

  logout() {
    this._authState.set({ isLoggedIn: false });
  }
}