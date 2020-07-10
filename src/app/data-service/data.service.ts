import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {UserProfile} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  previousUserData: Observable<UserProfile>;

  private previousUserSubject: Subject<UserProfile> =  new Subject<UserProfile>();

  constructor() {
    this.previousUserData =  this.previousUserSubject.asObservable();
  }

  updatePreviousUser(user: UserProfile) {
    this.previousUserSubject.next(user);
  }
}
