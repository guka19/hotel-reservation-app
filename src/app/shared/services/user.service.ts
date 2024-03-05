import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Owner } from '../models/owner';
import { LogUser } from '../models/log-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  regUrl = "http://localhost:3000/users";
  logUrl = "http://localhost:3000/login";

  register(user: User | Owner): Observable<User | Owner> {
    return this.http.post<User | Owner>(this.regUrl, user);
  }

  login(user: LogUser) {
    return this.http.post<User | Owner>(this.logUrl, user);
  }

  constructor(private http: HttpClient) { }
}
