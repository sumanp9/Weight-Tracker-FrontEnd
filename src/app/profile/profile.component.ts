import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserProfile} from '../home/home.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userProfile: UserProfile;
  constructor(public dialogRef: MatDialogRef<ProfileComponent>,
              @Inject(MAT_DIALOG_DATA) public profile: UserProfile) {
    this.userProfile =  profile;
  }

  ngOnInit(): void {
  }

}
