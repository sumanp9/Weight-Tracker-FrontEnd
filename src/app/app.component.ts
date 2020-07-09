import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {SignUpPageComponent} from './sign-up-page/sign-up-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router, public dialog: MatDialog) {
  }
  title = 'Weight-Tracker-FrontEnd';
  logged = false;

  signin() {
      // Create a login UI
    this.logged= true;
    this.router.navigateByUrl('/trackerApp');

  }

  signup() {
      this.dialog.open(SignUpPageComponent, {
        width: '400px',
        disableClose: true
      });
  }
}

