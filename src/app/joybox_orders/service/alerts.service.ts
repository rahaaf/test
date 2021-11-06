import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  durationInSeconds = 5;
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar( message ) {
    this._snackBar.open(message , null, {
      duration: this.durationInSeconds * 1000,
    });
  }

  
  openSnackBarFail( error) {
    
    
    const desc = " find error please agine one more"
    this._snackBar.open(   desc,null, {
      duration: this.durationInSeconds * 1000,
      verticalPosition : 'top',
      horizontalPosition : 'center'
    });
  }

}
