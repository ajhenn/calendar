import { computed, inject, Injectable, signal } from '@angular/core';
import { supabase } from '../supabase.client';
import { LoaderService } from './loader.service';
import { CalendarEvent } from '../models/calendar-event.model';
import { DemoService } from './demo.service';
import { AuthService } from './auth-state.service';

/**
 * Generic service response wrapper
 */
export interface ServiceResponse<T> {
  data: T | null;
  error: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class CalendarService {

  private authService = inject(AuthService);
  private loaderService = inject(LoaderService);
  private demoService = inject(DemoService);
  private _entries = signal<CalendarEvent[]>([]);
  private _isDemoMode = signal<boolean>(false);
  entries = this._entries.asReadonly();
  todaysEntries = computed(() => {
    const now = new Date();
    const today = [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, '0'),
      String(now.getDate()).padStart(2, '0')
    ].join('-');
    return this.entries().filter(e => e.start_date <= today && e.end_date >= today);
  });
  isMonToThu = computed(() => {
    const day = new Date().getDay();
    return day >= 1 && day <= 4;
  });
  isDemoMode = this._isDemoMode.asReadonly();
  private _sessionTimer = signal(6);
  public readonly sessionTimer = this._sessionTimer.asReadonly();
  private timerStarted = false;
  startSessionTimer(): void {
    if (this.timerStarted) { return; }
    this.timerStarted = true;

    const intervalId = setInterval(() => {
      this._sessionTimer.update((val) => {
        if (val <= 1) {
          clearInterval(intervalId);
        }
        return Math.max(0, val - 1);
      });
    }, 1000);
  }

  private get ownerId(): string | null {
    return this.authService.getAuthState().currentOwnerId ?? null;
  }

  async fetchEntries(): Promise<ServiceResponse<any>> {
    if (this._isDemoMode()) {
      // Return demo data
      const demoData = this.demoService.getDemoEntries();
      this._entries.set(demoData);
      return { data: demoData, error: null };
    }

    if (!this.ownerId) {
      return { data: null, error: 'No calendar owner found!' };
    }

    this.loaderService.show();
    try {
      const { data, error } = await supabase
        .from('calendar_events')
        .select('*')
        .eq('owner_id', this.ownerId)
        .order('start_date', { ascending: true });

      if (error) return { data: null, error: error.message };
      this._entries.set(data || []);
      return { data: data || [], error: null };
    } catch (err: any) {
      this._entries.set([]);
      return { data: null, error: err?.message || 'Unexpected error fetching calendar entries' };
    } finally {
      this.loaderService.hide();
    }
  }

  enableDemoMode(): void {
    this._isDemoMode.set(true);
  }

  async addEntry(entry: Omit<CalendarEvent, 'id' | 'created'>): Promise<ServiceResponse<CalendarEvent>> {
    if (this._isDemoMode()) {
      const newEntry = this.demoService.addDemoEntry(entry);
      this._entries.update(entries => [...entries, newEntry]);
      return { data: newEntry, error: null };
    }

    this.loaderService.show();
    try {
      const { data, error } = await supabase
        .from('calendar_events')
        .insert(entry)
        .select()
        .single();
      if (error) return { data: null, error: error.message };
      this._entries.update(entries => [...entries, data]);
      return { data: data || null, error: null };
    } catch (err: any) {
      return { data: null, error: err?.message || 'Unexpected error adding calendar entry' };
    }
    finally {
      this.loaderService.hide();
    }
  }

  async updateEntry(id: string, updates: Partial<Omit<CalendarEvent, 'id' | 'created'>>): Promise<ServiceResponse<CalendarEvent>> {
    if (this._isDemoMode()) {
      const updatedEntry = this.demoService.updateDemoEntry(id, updates);
      if (updatedEntry) {
        this._entries.update(entries => entries.map(e => e.id === id ? updatedEntry : e));
        return { data: updatedEntry, error: null };
      }
      return { data: null, error: 'Entry not found' };
    }

    this.loaderService.show();
    try {
      const { data, error } = await supabase
        .from('calendar_events')
        .update(updates)
        .in('id', [id])
        .select()
        .single();
      if (error) return { data: null, error: error.message };
      this._entries.update(entries => entries.map(e => e.id === id ? { ...e, ...data } : e));
      return { data: data || null, error: null };
    } catch (err: any) {
      return { data: null, error: err?.message || 'Unexpected error updating calendar entry' };
    } finally {
      this.loaderService.hide();
    } 
  }

  async deleteEntry(id: string): Promise<ServiceResponse<any>> {
    if (this._isDemoMode()) {
      const deleted = this.demoService.deleteDemoEntry(id);
      if (deleted) {
        this._entries.update(entries => entries.filter(e => e.id !== id));
        return { data: null, error: null };
      }
      return { data: null, error: 'Entry not found' };
    }

    this.loaderService.show();
    try {
      const { error } = await supabase
        .from('calendar_events')
        .delete()
        .in('id', [id]);
      if (error) return { data: null, error: error.message };
      this._entries.update(entries => entries.filter(e => e.id !== id));
      return { data: null, error: null };
    } catch (err: any) {
      return { data: null, error: err?.message || 'Unexpected error deleting calendar entry' };
    } finally {
      this.loaderService.hide();
    }
  }

}
