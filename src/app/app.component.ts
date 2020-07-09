import {Component, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {SignUpPageComponent} from './sign-up-page/sign-up-page.component';
import {LoginService} from './login-service/login.service';

export interface UserProfile {
  firstName: string;
  lastName: string;
  emailId: string;
  height: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router, public dialog: MatDialog,
              private loginService: LoginService) {
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
      const signUpDialog = this.dialog.open(SignUpPageComponent, {
        width: '400px',
        disableClose: true
      });

      signUpDialog.afterClosed().subscribe((newUser: UserProfile) => {
        this.loginService.registerNewUser(newUser);
      });
  }

  signIn() {
    console.log(this.emailId);
    this.loginService.userLogin(this.emailId).subscribe((user: UserProfile)=> {
    });
  }
}

