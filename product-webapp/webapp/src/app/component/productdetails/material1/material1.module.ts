import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
const MaterialComponents=[
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatButtonToggleModule,
  MatCheckboxModule
  

]

@NgModule({

  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class Material1Module { }
