import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
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
  dataDate: Date;

  units: Unit[] = [
    {value: 'kg', viewValue: 'kg'},
    {value: 'lb', viewValue: 'lb'}
  ];

  date = new FormControl(new Date());

  constructor(public dialogRef: MatDialogRef<EnterWeightComponent>,
              @Inject(MAT_DIALOG_DATA) public data: WeightData) { }

  ngOnInit(): void {

    if (this.data == null) {
      this.data = {id: null, weight: null, unit: '', date: ''};
    } else{
      this.dataDate =  new Date(this.data.date);
      //this.dataDate.setDate(this.dataDate.getDate() + 1);
      this.date = new FormControl(this.dataDate);
    }
  }

  save() {
    if (!(this.data.weight == null && this.data.unit == null)) {
      console.log(this.date.value)
      this.weightData = {id: this.data.id, date: this.date.value, weight: this.data.weight, unit: this.data.unit};
      this.dialogRef.close(this.weightData);

    } else{
      this.errorMessage = 'One of the field is not valid. Please fill all the field before saving.';
    }
  }
}
