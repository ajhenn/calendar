import { inject, Injectable, signal } from '@angular/core';
import { supabase } from '../supabase.client';
import { LoaderService } from './loader.service';
import { CalendarEvent } from '../models/calendar-event.model';

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
  private _entries = signal<CalendarEvent[]>([]);
  entries = this._entries.asReadonly();

  async fetchEntries(): Promise<ServiceResponse<any>> {
    this.loaderService.show();
    try {
      const userResult = await supabase.auth.getUser();
      const user = userResult?.data?.user;
      if (!user) return { data: null, error: 'Not authenticated' };

      const { data, error } = await supabase
        .from('calendar_events')
        .select('*')
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

  async addEntry(entry: Omit<CalendarEvent, 'id' | 'created'>): Promise<ServiceResponse<CalendarEvent>> {
    this.loaderService.show();
    try {
      const userResult = await supabase.auth.getUser();
      const user = userResult?.data?.user;
      if (!user) return { data: null, error: 'Not authenticated' };
      console.log('Adding calendar entry:', entry);
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
    this.loaderService.show();
    try {
      const userResult = await supabase.auth.getUser();
      const user = userResult?.data?.user;
      if (!user) return { data: null, error: 'Not authenticated' };
      console.log('Updating calendar entry:', { id, updates });
      const { data, error } = await supabase
        .from('calendar_events')
        .update(updates)
        .eq('id', id)
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
        .eq('id', id);
      if (error) return { data: null, error: error.message };
      this._entries.update(entries => entries.filter(e => e.id !== id));
      return { data: null, error: null };
    } catch (err: any) {
      return { data: null, error: err?.message || 'Unexpected error deleting calendar entry' };
    } finally {
      this.loaderService.hide();
    }
  }
// TODO
//   async addGroceryItem(item: string, quantity: number): Promise<ServiceResponse<any>> {
//     this.loaderService.show();
//     try {
//       const userResult = await supabase.auth.getUser();
//       const user = userResult?.data?.user;
//       if (!user) return { data: null, error: 'Not authenticated' };

//       const { data, error } = await supabase
//         .from('grocery_lists')
//         .insert({ user_id: user.id, item, quantity })
//         .select()
//         .single();

//       if (error) return { data: null, error: error.message };
//       return { data: data || null, error: null };
//     } catch (err: any) {
//       return { data: null, error: err?.message || 'Unexpected error adding item' };
//     } finally {
//       this.loaderService.hide();
//     }
//   }

//   async getGroceryList(): Promise<ServiceResponse<any[]>> {
//     this.loaderService.show();
//     try {
//       const userResult = await supabase.auth.getUser();
//       const user = userResult?.data?.user;
//       if (!user) return { data: [], error: 'Not authenticated' };

//       const { data, error } = await supabase
//         .from('grocery_lists')
//         .select('*')
//         .eq('user_id', user.id)
//         .order('created_at', { ascending: false });

//       if (error) return { data: [], error: error.message };
//       return { data: data || [], error: null };
//     } catch (err: any) {
//       return { data: [], error: err?.message || 'Unexpected error fetching list' };
//     } finally {
//       this.loaderService.hide();
//     }
//   }

//   async deleteUserItems(items: string[]) {
//     this.loaderService.show();
//     try {
//       const userResult = await supabase.auth.getUser();
//       const user = userResult?.data?.user;
//       if (!user) return { data: [], error: 'Not authenticated' };

//       const { data, error } = await supabase
//         .from('grocery_lists')
//         .delete()
//         .in('id', items)
//         .eq('user_id', user.id);

//       if (error) return { data: [], error: error.message };
//       return { data: data || [], error: null };
//     } catch (err: any) {
//       return { data: [], error: err?.message || 'Unexpected error deleting items' };
//     } finally {
//       this.loaderService.hide();
//     }
// }

}
