import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Route } from '@angular/router';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { AccountdataComponent } from '../component/accountdata/accountdata.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDisabled:boolean=true
  coin:any=50
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  goToHome():any{
    
  }
  
  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = false;
  isShowing = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  onClickCoin(){
    const dialogConfig =new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.restoreFocus=false;
    dialogConfig.width= "70%"
    dialogConfig.height = "75%"
    this.dialog.open(AccountdataComponent,dialogConfig);
   


  }

}
