import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {DataService} from '../data-service/data.service';
import {UserProfile} from '../app.component';

@Component({
  selector: 'app-tracker-application',
  templateUrl: './tracker-application.component.html',
  styleUrls: ['./tracker-application.component.scss']
})
export class TrackerApplicationComponent implements OnInit {
  user: UserProfile;
  constructor(private route: Router,
              private dataService: DataService) {
    this.dataService.previousUserData.subscribe((data) => {
      this.user = data;
    });
  }

  ngOnInit(): void {
    console.log(this.user.firstName);
  }

}
