import { Component, OnInit } from '@angular/core';
import {AdminUserData, LoginService} from '../login-service/login.service';
import {UserProfile} from '../home/home.component';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})
export class ShowUsersComponent implements OnInit {

  users: AdminUserData[];
  constructor(private loginService: LoginService) {

  }

  ngOnInit(): void {
    this.refreshPage();
  }

  private refreshPage() {
    this.loginService.getUsers().subscribe(user => {
      this.users = user;
    });
  }
}
