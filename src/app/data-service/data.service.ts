import { Injectable } from '@angular/core';
import {UserProfile} from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  serviceData: UserProfile;

  }

