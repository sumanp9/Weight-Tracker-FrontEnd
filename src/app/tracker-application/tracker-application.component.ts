import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {DataService} from '../data-service/data.service';
import {UserProfile} from '../home/home.component';
import {Subscription} from 'rxjs';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ProfileComponent} from '../profile/profile.component';
import {EnterWeightComponent} from '../enter-weight/enter-weight.component';
import {LoginService, WeightData} from '../login-service/login.service';

@Component({
  selector: 'app-tracker-application',
  templateUrl: './tracker-application.component.html',
  styleUrls: ['./tracker-application.component.scss']
})
export class TrackerApplicationComponent implements OnInit {
  user: UserProfile;
  subscription: Subscription; // Using subscription to get object from service;
  private welcomeTemplate: TemplateRef<any>;

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
        this.loginService.addUsersWeightData(this.user.id, data);
      } else {
        console.error('Unable to get user\'s data');
      }
    });

  }
}
