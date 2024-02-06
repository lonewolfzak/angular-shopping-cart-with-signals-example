import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule, CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
