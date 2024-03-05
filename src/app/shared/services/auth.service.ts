import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthentiated = new BehaviorSubject(false);

  isAuthenticated$: Observable<boolean> = this.isAuthentiated.asObservable();

  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getUser(): any {
    let user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  setLoggedIn(): void {
    this.isAuthentiated.next(true);
  }

  setLoggedOut(): void {
    this.isAuthentiated.next(false);
  }

  clearToken() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  }

  constructor() {}
}
