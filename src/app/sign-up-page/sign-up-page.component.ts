import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  firstName = new FormControl();
  lastName = new FormControl();
  email = new FormControl();
  height= new FormControl();
  formFilled: boolean;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SignUpPageComponent>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
   /* if(this.firstName !== '' && this.lastName !== '' && this.email !== '') {
      this.formFilled = false;
    }*/
  }


  signUp() {
    console.log(this.firstName.value);
  }
}
