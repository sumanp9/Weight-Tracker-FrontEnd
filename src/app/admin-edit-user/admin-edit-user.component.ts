import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AdminUserData, LoginService} from '../login-service/login.service';
import {Unit} from '../enter-weight/enter-weight.component';

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrls: ['./admin-edit-user.component.scss']
})
export class AdminEditUserComponent implements OnInit {

  user: AdminUserData;
  roles: Unit[] = [
    {value: 'Admin', viewValue: 'Admin'},
    {value: 'User', viewValue: 'User'}
  ];
  constructor(private dialogRef: MatDialogRef<AdminEditUserComponent>,
              private loginService: LoginService,
              @Inject(MAT_DIALOG_DATA) private editUser: AdminUserData) {
    this.user =  this.editUser;
  }

  ngOnInit(): void {
  }

  save() {
   this.dialogRef.close(this.user);
  }
}
