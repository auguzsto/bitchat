import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private supabase: SupabaseService

  constructor() {
    this.supabase = new SupabaseService()
  }

  async signIn(email: string, password: string) {
    return await this.supabase.client.auth.signInWithPassword({email, password})
  }

  async signUp(email: string, password: string) {
    return await this.supabase.client.auth.signUp({email, password})
  }
}
