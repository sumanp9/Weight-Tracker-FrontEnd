import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data-service/data.service';
import {UserProfile} from '../home/home.component';
import {MatDialog} from '@angular/material/dialog';
import {ProfileComponent} from '../profile/profile.component';
import {EnterWeightComponent} from '../enter-weight/enter-weight.component';
import {LoginService, WeightData} from '../login-service/login.service';
import {MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'app-tracker-application',
  templateUrl: './tracker-application.component.html',
  styleUrls: ['./tracker-application.component.scss']
})
export class TrackerApplicationComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  user: UserProfile;
  opened = true;
  shouldRun =  [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));


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
      disableClose: true
    }).afterClosed().subscribe((data: WeightData) => {
      if (data) {
        this.loginService.addUsersWeightData(this.user.id, data).subscribe();
      } else {
        console.error('Unable to get user\'s data');
      }
    } , error => {console.error('Unable to add your data to database!')});

  }
}
