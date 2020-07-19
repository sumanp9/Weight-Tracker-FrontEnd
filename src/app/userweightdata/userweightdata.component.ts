import { Component, OnInit } from '@angular/core';
import {LoginService, WeightData} from '../login-service/login.service';
import {DataService} from '../data-service/data.service';
import {UserProfile} from '../home/home.component';
import {DatePipe, formatDate} from '@angular/common';

@Component({
  selector: 'app-userweightdata',
  templateUrl: './userweightdata.component.html',
  styleUrls: ['./userweightdata.component.scss']
})
export class UserweightdataComponent implements OnInit {

  user: UserProfile;
  userData: Array<WeightData>;

  displayColumns: string[] = ['position', 'date', 'weight', 'bmi'];

  constructor(private loginService: LoginService,
              private dataService: DataService,
              private datePipe: DatePipe) {

    this.user =  this.dataService.serviceData;

  }

  ngOnInit(): void {
    this.refreshPage();
    console.log("The user is "+ this.user.emailId);
  }

  private refreshPage() {
    this.loginService.getUsersData(this.user.id).subscribe((arrayData) => {
      this.userData = arrayData;
      console.log(this.userData.length);
    }, error => {
      console.error('Unable to get user\'s data. Please refer to the error: ' + error);
    });
  }


  getBMI(weight: number, unit: string) {
     if (unit === 'lb') {
           return this.bmiRound((weight / 2.2046), ((this.user.height * this.user.height) / 10000));
        } else{
          return this.bmiRound(weight , ((this.user.height * this.user.height) / 10000));
        }
      }

  bmiRound(weight: number, height: number) {
    return Math.round((weight / height) * 10) / 10;
  }

  indexOf(weight: WeightData) {
    return this.userData.indexOf(weight) + 1;
  }

}
