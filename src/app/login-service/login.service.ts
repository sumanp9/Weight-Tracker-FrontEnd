import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserProfile} from '../app.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  userLogin(emailId: string): Observable<UserProfile>{
    return this.http.get<UserProfile>('http://localhost:8080/login/' + emailId);
  }

  registerNewUser(newUser: UserProfile): Observable<UserProfile> {
    return this.http.post<UserProfile>('http://localhost:8080/registerUser', newUser);
  }
}
