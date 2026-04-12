import { inject, Injectable } from '@angular/core';
import { supabase } from '../supabase.client';
import { AuthService, User } from './auth-state.service';
import { LoaderService } from './loader.service';

export interface UserMetadata {
  id?: string;
  role?: string;
  email?: string;
  user_metadata?: {
    display_name?: string;
  }
  [key: string]: any;
}

export interface AuthResponse {
  data: UserMetadata | null;
  error: string | null;
}


@Injectable({
  providedIn: 'root',
})
export class SignInService {

  private authService = inject(AuthService);
  private loaderService = inject(LoaderService);

  async signUp(email: string, password: string, displayName?: string, inviteCode?: string ): Promise<AuthResponse> {
    this.loaderService.show();
    try {
      let verifiedOwnerId: string | null = null;

      // 1. Pre-verify invite code if one was provided
      if (inviteCode?.trim()) {
        const { data: invite, error: inviteError } = await supabase
          .from('invite_codes')
          .select('owner_id')
          .eq('code', inviteCode.trim())
          .maybeSingle();

        if (inviteError || !invite) {
          return { data: null, error: 'Invalid invite code. Please check the code and try again.' };
        }
        verifiedOwnerId = invite.owner_id;
      }

      // 2. Proceed with account creation only if code is valid (or not needed)
      const { data, error } = await supabase.auth.signUp({ 
        email, 
        password,
        options: {
          data: {
            display_name: displayName || email.split('@')[0] // Fallback to email prefix if no display name
          }
        }
      });
      if (error) {
        return { data: null, error: error.message };
      }

      // 3. Link the verified owner ID to the new account
      if (verifiedOwnerId && data.user) {
        await this.finalizeViewerAccess(data.user, verifiedOwnerId);
      } else if (!inviteCode?.trim()) {
        console.warn('Should handle owner flow!');
      }
      return { data, error: null };
    } catch (err: any) {
      const errorMessage = err?.message || 'An unexpected error occurred during sign up';
      return { data: null, error: errorMessage };
    } finally {
      this.loaderService.hide();
    }
  }

  private async finalizeViewerAccess(user: any, ownerId: string): Promise<void> {
    // Link viewer to owner in the database
    await supabase.from('calendar_access').insert({
      viewer_id: user.id,
      owner_id: ownerId
    });

    // Synchronize local auth state
    const viewerUser: User = {
      id: user.id,
      email: user.email || '',
      displayName: user.user_metadata?.['display_name'] || undefined
    };
    this.authService.login(viewerUser, false, ownerId);
  }

  async signIn(email: string, password: string): Promise<AuthResponse> {
    this.loaderService.show();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        return { data: null, error: error.message };
      }
      if (data && data.user) {
        const user: User = {
          id: data.user.id,
          email: data.user.email || '',
          displayName: data.user.user_metadata?.['display_name'] || undefined,
        };

        const { isOwner, currentOwnerId } = await this.resolveOwnership(user.id)
        this.authService.login(user, isOwner, currentOwnerId);
      }
      return { data, error: null };
    } catch (err: any) {
      const errorMessage = err?.message || 'An unexpected error occurred during sign in';
      return { data: null, error: errorMessage };
    } finally {
      this.loaderService.hide();
    }
  }

  public async resolveOwnership(userId: string): Promise<{ isOwner: boolean; currentOwnerId: string}> {
    const { data: code } = await supabase
      .from('invite_codes')
      .select('owner_id')
      .eq('owner_id', userId)
      .maybeSingle();

    if (code) {
      return { isOwner: true, currentOwnerId: userId};
    }

    const { data: access } = await supabase
      .from('calendar_access')
      .select('owner_id')
      .eq('viewer_id', userId)
      .maybeSingle();

      return {
        isOwner: false,
        currentOwnerId: access?.owner_id ?? userId
      }
  }

  async forgotPassword(email: string): Promise<AuthResponse> {
    this.loaderService.show();
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: 'https://ajhenn.github.io/calendar/#/reset-password'
      });
      if (error) {
        return { data: null, error: error.message };
      }
      console.log('Password reset email sent: ', data);
      return { data, error: null };
    } catch (err: any) {
      const errorMessage = err?.message || 'An unexpected error occurred during sign in';
      return { data: null, error: errorMessage };
    } finally {
      this.loaderService.hide();
    }
  }

  async resetPassword(password: string): Promise<AuthResponse> {
    this.loaderService.show();
    try {
      const { data, error } = await supabase.auth.updateUser({ password });
      if (error) {
        return { data: null, error: error.message };
      }
      console.log('Reset password: ', data);
      return { data, error: null };
    } catch (err: any) {
      const errorMessage = err?.message || 'An unexpected error occurred during sign in';
      return { data: null, error: errorMessage };
    } finally {
      this.loaderService.hide();
    }
  }

}
