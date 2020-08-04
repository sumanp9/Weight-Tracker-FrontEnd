import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  isTrue: boolean;
  constructor(private dialogRef: MatDialogRef<DeleteUserComponent>,
              @Inject(MAT_DIALOG_DATA) deleteYourSelf: boolean) {
    this.isTrue = deleteYourSelf;
  }

  ngOnInit(): void {
  }

  delete() {
    this.dialogRef.close(true);
  }
}
