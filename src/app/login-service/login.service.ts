import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserProfile} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  userLogin(emailId: string) {
    return this.http.post('http://localhost:8080/login', emailId);
  }

  registerNewUser(newUser: UserProfile) {
    return this.http.post('http://localhost:8080/register', newUser);
  }
}
