import { inject, Injectable, signal } from '@angular/core';
import { supabase } from '../supabase.client';
import { LoaderService } from './loader.service';
import { CalendarEvent } from '../models/calendar-event.model';
import { DemoService } from './demo.service';

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

  private loaderService = inject(LoaderService);
  private demoService = inject(DemoService);
  private _entries = signal<CalendarEvent[]>([]);
  private _isDemoMode = signal<boolean>(false);
  entries = this._entries.asReadonly();
  isDemoMode = this._isDemoMode.asReadonly();

  async fetchEntries(): Promise<ServiceResponse<any>> {
    if (this._isDemoMode()) {
      // Return demo data
      const demoData = this.demoService.getDemoEntries();
      this._entries.set(demoData);
      return { data: demoData, error: null };
    }

    this.loaderService.show();
    try {
      const userResult = await supabase.auth.getUser();
      const user = userResult?.data?.user;
      if (!user) return { data: null, error: 'Not authenticated' };

      const { data, error } = await supabase
        .from('calendar_events')
        .select('*')
        .eq('user_id', user.id)
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

  disableDemoMode(): void {
    this._isDemoMode.set(false);
  }

  async addEntry(entry: Omit<CalendarEvent, 'id' | 'created'>): Promise<ServiceResponse<CalendarEvent>> {
    this.loaderService.show();
    try {
      const userResult = await supabase.auth.getUser();
      const user = userResult?.data?.user;
      if (!user) return { data: null, error: 'Not authenticated' };
      console.log('Adding calendar entry:', entry);
      const { data, error } = await supabase
        .from('calendar_events')
        .insert({ ...entry, user_id: user.id })
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
    this.loaderService.show();
    try {
      const userResult = await supabase.auth.getUser();
      const user = userResult?.data?.user;
      if (!user) return { data: null, error: 'Not authenticated' };
      console.log('Updating calendar entry:', { id, updates });
      const { data, error } = await supabase
        .from('calendar_events')
        .update(updates)
        .in('id', [id])
        .eq('user_id', user.id)
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
    this.loaderService.show();
    try {
      const userResult = await supabase.auth.getUser();
      const user = userResult?.data?.user;
      if (!user) return { data: null, error: 'Not authenticated' };
      const { error } = await supabase
        .from('calendar_events')
        .delete()
        .in('id', [id])
        .eq('user_id', user.id);
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
