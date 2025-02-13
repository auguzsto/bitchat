import { Injectable } from '@angular/core';
import { AuthSession, SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  public client: SupabaseClient

  constructor() {
    this.client = createClient(environment.supabaseUrl, environment.supabaseKey)
  }
}
