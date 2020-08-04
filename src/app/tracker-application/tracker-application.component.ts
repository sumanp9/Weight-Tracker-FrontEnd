import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data-service/data.service';
import {UserProfile} from '../home/home.component';
import {MatDialog} from '@angular/material/dialog';
import {ProfileComponent} from '../profile/profile.component';
import {EnterWeightComponent} from '../enter-weight/enter-weight.component';
import {LoginService, WeightData} from '../login-service/login.service';
import {MatSidenav} from '@angular/material/sidenav';
import {UserweightdataComponent} from '../userweightdata/userweightdata.component';
import {ShowUsersComponent} from '../show-users/show-users.component';


@Component({
  selector: 'app-tracker-application',
  templateUrl: './tracker-application.component.html',
  styleUrls: ['./tracker-application.component.scss']
})
export class TrackerApplicationComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  @ViewChild(UserweightdataComponent) userDataComponent;
  user: UserProfile;
  calc: boolean;
  userBMI: number;
  showData: boolean;
  panelOpenState = false;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataService: DataService,
              private dialog: MatDialog,
              private loginService: LoginService)
  {

    this.user =  this.dataService.serviceData;
  }

  ngOnInit(): void {
    if (this.user == null) {
      this.router.navigateByUrl('');
    }
    }

  logout() {
    this.router.navigateByUrl('');
  }

  openUserProfile() {
    this.dialog.open(ProfileComponent, {
      data: this.user
    });
  }

  addWeight() {
    this.dialog.open(EnterWeightComponent, {
      width: '350px',
      disableClose: true,
      data: null
    }).afterClosed().subscribe((data: WeightData) => {
      if (data) {
        this.loginService.addUsersWeightData(this.user.id, data).subscribe(result => {
          this.userDataComponent.refreshPage();
        });
      } else {
        console.error('Unable to get user\'s data');
      }
    } , error => {console.error('Unable to add your data to database!'); });

  }

  calculateBMI() {
    // need to check if any weight has been entered before calculating bmi
    this.calc = true;

    this.loginService.getCurrentWeight(this.user.id).subscribe((weight => {
      if (weight.unit === 'lb') {
        this.userBMI =  this.bmiRound((weight.weight / 2.2046), ((this.user.height * this.user.height) / 10000));
      } else{
        this.userBMI = this.bmiRound(weight.weight , ((this.user.height * this.user.height) / 10000));
      }
      }
    ));
  }

  bmiRound(weight: number, height: number) {
    return Math.round((weight / height) * 10) / 10;
  }



  refreshBMI() {
    this.calc = false;
    this.userBMI = null;
  }

  showUserData() {
    this.showData = true;
  }

  showUsers() {
    this.dialog.open(ShowUsersComponent, {height: '800px', width: '600px', disableClose: true});
  }
}
