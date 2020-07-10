import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {DataService} from '../data-service/data.service';
import {UserProfile} from '../home/home.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tracker-application',
  templateUrl: './tracker-application.component.html',
  styleUrls: ['./tracker-application.component.scss']
})
export class TrackerApplicationComponent implements OnInit {
  user: UserProfile;
  subscription: Subscription; // Using subscription to get object from service;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataService: DataService) {

    this.user =  this.dataService.serviceData;
    console.log(this.user.firstName);
  }

  ngOnInit(): void {
    alert("Welcome "+ this.user.firstName);
    //console.log("In tracjer app "+ this.user.firstName);

  }

  logout() {
    this.router.navigateByUrl('');
  }
}
