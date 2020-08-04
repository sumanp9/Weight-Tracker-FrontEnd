import {Component, Inject, OnInit} from '@angular/core';
import {AdminUserData, LoginService} from '../login-service/login.service';
import {UserProfile} from '../home/home.component';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {DeleteUserComponent} from '../delete-user/delete-user.component';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})
export class ShowUsersComponent implements OnInit {

  // users: AdminUserData[];
  usersData: Array<AdminUserData>;
  displayColumns: string[] = ['Name', 'Email', 'Edit', 'Delete'];
  loggedInUserId: number;

  constructor(private loginService: LoginService,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) loggedInUserId: number) {
    this.loggedInUserId = loggedInUserId;
  }

  ngOnInit(): void {
    this.refreshPage();
  }

  private refreshPage() {
    this.loginService.getUsers().subscribe(user => {
      this.usersData = user;
    });
  }

  deleteUser(userId: number) {
    if (userId !== this.loggedInUserId) {
      this.dialog.open(DeleteUserComponent, {disableClose: true, width: '350px', height: '200px'}).afterClosed().subscribe((result) => {
        if (result) {
          this.loginService.deleteUser(userId).subscribe(next => {
            this.refreshPage();
          });
        }
      });
    } else {
      this.dialog.open(DeleteUserComponent, {disableClose: true, width: '350px', height: '200px', data: true});
    }
  }
}
