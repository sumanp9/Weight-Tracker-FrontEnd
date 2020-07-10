import {Component, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {SignUpPageComponent} from './sign-up-page/sign-up-page.component';
import {LoginService} from './login-service/login.service';
import {DataService} from './data-service/data.service';

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
              private loginService: LoginService,
              private dataService: DataService) {
  }
  title = 'Weight-Tracker-FrontEnd';
  logged = false;
  emailId: string;
  errorMsg: string;
  loginError: boolean;


   openDialog(signInTemplate: TemplateRef<any>) {
      // Create a login UI
      this.dialog.open(signInTemplate, {
      width: '300px'
    });

    //this.logged= true;
    //this.router.navigateByUrl('/trackerApp');

  }

  signup() {
     /* const signUpDialog = this.dialog.open(SignUpPageComponent, {
        width: '400px',
        disableClose: true
      });

      signUpDialog.afterClosed().subscribe((newUser: UserProfile) => {
        this.loginService.registerNewUser(newUser).subscribe((user) => {
          if (user) {
            this.dataService.updatePreviousUser(user);
            this.router.navigateByUrl('/trackerApp');
          }
        }, error => console.error(error));
      });*/
    this.router.navigate(['/notFound']);

  }

  signIn() {
    this.loginService.userLogin(this.emailId).subscribe((user: UserProfile) => {
      if (user != null) {
        console.log(user.firstName);
        this.dataService.updatePreviousUser(user);
        this.router.navigateByUrl('/trackerApp');
      } else if (user == null){
        this.loginError = true;
        this.errorMsg = 'Unable to find user with email id: ' + this.emailId + ' in the database!';
        console.error('Unable to find user with email id: '+ this.emailId);
      }
    }, error => {
      console.error(error);
    });
  }
}

