import {Component, Inject, OnInit} from '@angular/core';
import {AdminUserData, LoginService} from '../login-service/login.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {DeleteUserComponent} from '../delete-user/delete-user.component';
import {AdminEditUserComponent} from '../admin-edit-user/admin-edit-user.component';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})
export class ShowUsersComponent implements OnInit {

  usersData: Array<AdminUserData>;
  displayColumns: string[] = ['First Name', 'Last Name', 'Email', 'Role', 'Edit', 'Delete'];
  loggedInUserId: number;
  errorMsg: string;

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

  editUser(user: AdminUserData) {
    this.dialog.open(AdminEditUserComponent, {
      width: '300px',
      height: '200px',
      data: user
    }).afterClosed().subscribe((editedUser) => {
      if (editedUser) {
        this.loginService.updateUser(editedUser).subscribe((res) => {
          this.refreshPage();
        }, error => {
          this.errorMsg = 'Unable to save the changes made to user details.';
          console.log(error);
        });
      }
    });
  }
}
