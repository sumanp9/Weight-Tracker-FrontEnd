import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserProfile} from '../home/home.component';

export interface WeightData{
  id: number;
  date: string;
  weight: number;
  unit: string;
}

export interface AdminUserData {
  id: number;
  fName: string;
  lName: string;
  email: string;
  role: string;
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  userLogin(emailId: string, password: string): Observable<UserProfile>{
    return this.http.post<UserProfile>('http://localhost:8080/login/' + emailId, password );
  }

  registerNewUser(newUser: UserProfile): Observable<UserProfile> {
    return this.http.post<UserProfile>('http://localhost:8080/registerUser', newUser);
  }

  addUsersWeightData(id: number, weightData: WeightData) {
    return this.http.post('http://localhost:8080/addWeightData/' + id, weightData);
  }

  getCurrentWeight(id: number): Observable<WeightData> {
    return this.http.get<WeightData>('http://localhost:8080/getCurrentUserWeight/' + id);
  }

  getUsersData(id: number): Observable<Array<WeightData>> {
    return this.http.get<Array<WeightData>>('http://localhost:8080/getData/' + id);
  }

  deleteUserData(dataId: number) {
    return this.http.delete('http://localhost:8080/deleteData/' + dataId);
  }

  getUsers(): Observable<Array<AdminUserData>> {
    return this.http.get<Array<AdminUserData>>('http://localhost:8080/getAllUsers/');
  }

  deleteUser(userId: number) {
    return this.http.delete('http://localhost:8080/user/delete/id/' + userId);
  }

  updateUser(user: AdminUserData) {
    return this.http.post('http://localhost:8080/user/update/', user);
  }
}
