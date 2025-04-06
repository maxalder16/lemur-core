import {
  AuthError,
  createClient,
  SupabaseClient,
  type Session,
  type User,
} from '@supabase/supabase-js';

class SupabaseConnector {
  private supabaseInstance: SupabaseClient<any, 'public', any> | null = null;

  constructor(
    private supabaseUrl: string,
    private supabaseKey: string
  ) {}

  public getInstance(): SupabaseClient<any, 'public', any> {
    if (!this.supabaseInstance) {
      this.supabaseInstance = createClient(this.supabaseUrl, this.supabaseKey);
    }
    return this.supabaseInstance;
  }

  public async signUp(username: string, password: string) {
    if (username && password && this.supabaseInstance) {
      const { error } = await this.supabaseInstance.auth.signUp({
        email: username,
        password: password,
      });

      return error?.message;
    }
  }

  public async signIn(username: string, password: string) {
    if (username.length > 0 && password.length > 0 && this.supabaseInstance) {
      const { error } = await this.supabaseInstance.auth.signInWithPassword({
        email: username,
        password: password,
      });

      return error?.message;
    }
  }
}

export const supabaseConnector = new SupabaseConnector(
  'https://knlboedsxlwmmddmjwig.supabase.co',
  import.meta.env.VITE_SUPABASE_KEY
);
