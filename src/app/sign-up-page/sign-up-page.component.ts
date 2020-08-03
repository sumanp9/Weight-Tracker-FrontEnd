import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserProfile} from '../home/home.component';
import {Unit} from '../enter-weight/enter-weight.component';
@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  userProfile: UserProfile;
  rePassword: string;
  errorMessage: string;
  roles: Unit[] = [
    {value: 'Admin', viewValue: 'Admin'},
    {value: 'User', viewValue: 'User'}
  ];



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

    this.userProfile = {id: null, firstName: '', lastName: '', emailId: '', password: '', height: null, role: ''};
  }


  signUp() {
    if (this.userProfile.password === this.rePassword) {
      this.dialogRef.close(this.userProfile);
    } else{
      this.errorMessage = 'Passwords do not match';
    }

  }

  checkPasswords() {
    if (this.userProfile.password !== this.rePassword) {
      this.errorMessage = 'Passwords do not match';
    }
  }
}
