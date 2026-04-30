import { Injectable, signal } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private _isLoading = signal(false);
  isLoading = this._isLoading.asReadonly();

  private activeRequests = 0;
  private startLoaderTimer?: Subscription;
  private minVisibleTimer?: Subscription;
  private loaderShownAt = 0;
  private readonly loaderDelay = 300; // Delay before showing loader in ms
  private readonly minVisibleTime = 500; // Minimum time to show loader in ms

  show() {
    this.activeRequests++;
    if (this.activeRequests === 1) {
      this.startLoaderTimer = timer(this.loaderDelay).subscribe(() => {
        this.loaderShownAt = Date.now();
        this._isLoading.set(true);
      });
    }
  }

  hide() {
    this.activeRequests = Math.max(this.activeRequests - 1, 0);
    if (this.activeRequests === 0) {

      if (this.startLoaderTimer) {
        this.startLoaderTimer.unsubscribe();
        this.startLoaderTimer = undefined;
      }

      if (this._isLoading()) {
        const elapsed = Date.now() - this.loaderShownAt;
        const remaining = Math.max(this.minVisibleTime - elapsed, 0);

        if (remaining > 0) {

          if (this.minVisibleTimer) {
            this.minVisibleTimer.unsubscribe();
            this.minVisibleTimer = undefined;
          }
          // Keep loader visible for the remaining time
          this.minVisibleTimer = timer(remaining).subscribe(() => {
            this._isLoading.set(false);
          });
        } else {
          // Hide immediately if min time already passed
          this._isLoading.set(false);
        }
      }
    }
  }
 
}
