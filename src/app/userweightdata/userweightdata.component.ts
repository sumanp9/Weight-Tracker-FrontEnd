import { Component, OnInit } from '@angular/core';
import {LoginService, WeightData} from '../login-service/login.service';
import {DataService} from '../data-service/data.service';
import {UserProfile} from '../home/home.component';
import {DatePipe} from '@angular/common';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {EnterWeightComponent} from '../enter-weight/enter-weight.component';
import {DeleteWeightDataComponent} from '../delete-weight-data/delete-weight-data.component';

@Component({
  selector: 'app-userweightdata',
  templateUrl: './userweightdata.component.html',
  styleUrls: ['./userweightdata.component.scss']
})
export class UserweightdataComponent implements OnInit {

  user: UserProfile;
  userData: Array<WeightData>;

  displayColumns: string[] = ['position', 'date', 'weight', 'bmi', 'delete'];

  constructor(private loginService: LoginService,
              private dataService: DataService,
              private datePipe: DatePipe,
              private dialog: MatDialog) {

    this.user =  this.dataService.serviceData;

  }

  ngOnInit(): void {
    this.refreshPage();
  }

  private refreshPage() {
    this.loginService.getUsersData(this.user.id).subscribe((arrayData) => {
      this.userData = arrayData;
      console.log(this.userData);
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

  editWeight(weight: WeightData) {
    const dateDialog = this.dialog.open(EnterWeightComponent, {
      width: '300px',
      data: weight,
      disableClose: false
    });
    dateDialog.afterClosed().subscribe((newData: WeightData) => {
      if (newData) {
        this.loginService.addUsersWeightData(this.user.id, newData).subscribe((result => {
          this.refreshPage();
        }), error => {
          console.error('Unable to update data. ' + error);
          this.refreshPage();
        });
      } else { this.refreshPage(); }
    }, error => {console.log('Unable to get users data. Please check the error log below. ' + error);});
  }

  deleteWeightData(userData: WeightData) {
      this.dialog.open(DeleteWeightDataComponent, {
        width: '350px',
        disableClose: true,
        data: userData
      }).afterClosed().subscribe(del => {
        if (del) {
          this.loginService.deleteUserData(userData.id).subscribe((result)=> {
            this.refreshPage();
          }, error => {console.error("unable to delete the record. Please try again");})
        }
      });
  }
}
