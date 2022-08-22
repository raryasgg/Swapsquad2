import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentComponent } from './payment/payment.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webapp';
constructor(public dialog:MatDialog ){}

openDialog(){
  this.dialog.open(PaymentComponent);
}

}

