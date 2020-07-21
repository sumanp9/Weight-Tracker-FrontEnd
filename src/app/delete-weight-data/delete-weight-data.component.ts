import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserProfile} from '../home/home.component';
import {WeightData} from '../login-service/login.service';

@Component({
  selector: 'app-delete-weight-data',
  templateUrl: './delete-weight-data.component.html',
  styleUrls: ['./delete-weight-data.component.scss']
})
export class DeleteWeightDataComponent implements OnInit {

  weightData: WeightData;
  constructor(private dialogRef: MatDialogRef<DeleteWeightDataComponent>,
              @Inject(MAT_DIALOG_DATA) public data: WeightData) {
    this.weightData = data;
  }

  ngOnInit(): void {
  }

  delete() {
    this.dialogRef.close(true);
  }
}
