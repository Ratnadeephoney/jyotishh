import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent {

  question:string = '';

  constructor(public dialogRef: MatDialogRef<OthersComponent>){}

  submitQuestion():void{

    this.dialogRef.close()
    
  }
}
