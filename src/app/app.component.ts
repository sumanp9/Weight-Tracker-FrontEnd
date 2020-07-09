import {Component, TemplateRef} from '@angular/core';
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
  emailId: string;

  openDialog(signInTemplate: TemplateRef<any>) {
      // Create a login UI
    let dialogRef =  this.dialog.open(signInTemplate, {
      width: '300px'
    });

    //this.logged= true;
    //this.router.navigateByUrl('/trackerApp');

  }

  signup() {
      this.dialog.open(SignUpPageComponent, {
        width: '400px',
        disableClose: true
      });
  }

  signIn() {
    console.log(this.emailId);
  }
}

