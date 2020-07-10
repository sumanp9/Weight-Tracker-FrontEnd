import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {UserProfile} from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  serviceData: UserProfile;

  }

