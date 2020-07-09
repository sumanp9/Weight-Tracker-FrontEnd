import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserProfile} from '../app.component';
@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  userProfile: UserProfile;


  constructor(
    public dialogRef: MatDialogRef<SignUpPageComponent>,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    this.userProfile = {firstName: '', lastName: '', emailId: '', height: null};
  }


  signUp() {
    console.log(this.userProfile)
    this.dialogRef.close(this.userProfile);
  }
}
