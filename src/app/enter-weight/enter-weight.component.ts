import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {WeightData} from '../login-service/login.service';

export interface Unit {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-enter-weight',
  templateUrl: './enter-weight.component.html',
  styleUrls: ['./enter-weight.component.scss']
})
export class EnterWeightComponent implements OnInit {
  weight: number;
  weightData: WeightData;
  errorMessage: string;

  units: Unit[] = [
    {value: 'kg', viewValue: 'kg'},
    {value: 'lb', viewValue: 'lb'}
  ];
  selectedUnit: string;
  date = new FormControl(new Date());
  serializedDate =  new FormControl((new Date()).toISOString());

  constructor(public dialogRef: MatDialogRef<EnterWeightComponent>) { }

  ngOnInit(): void {
  }

  save() {
    if (!(this.weight == null && this.selectedUnit == null)) {
      this.weightData = {date: this.serializedDate.value, weight: this.weight, unit: this.selectedUnit};
      this.dialogRef.close(this.weightData);

    } else{
      this.errorMessage = 'One of the field is not valid. Please fill all the field before saving.';
    }
  }
}
