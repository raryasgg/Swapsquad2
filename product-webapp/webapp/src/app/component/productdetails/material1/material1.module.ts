import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressBarModule} from '@angular/material/progress-bar';
const Material1Components=[
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatProgressBarModule
  

]

@NgModule({

  imports: [Material1Components],
  exports:[Material1Components]
})
export class Material1Module { }
