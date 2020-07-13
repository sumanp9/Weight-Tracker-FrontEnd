import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserProfile} from '../home/home.component';
import {MatDatepicker} from '@angular/material/datepicker';

export interface WeightData{
  date: string;
  weight: number;
  unit: string;
}


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

  addUsersWeightData(id: number, weightData: WeightData) {
    this.http.post('http://localhost:8080/addWeightData/' + id, weightData);
  }
}
