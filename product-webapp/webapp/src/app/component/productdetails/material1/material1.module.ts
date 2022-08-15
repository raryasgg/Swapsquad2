import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatChipsModule} from '@angular/material/chips';
import {MatRadioModule} from '@angular/material/radio';




const Material1Components = [
 MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatProgressBarModule,
  FlexLayoutModule,
  MatPaginatorModule,

  MatChipsModule,
  MatRadioModule
];
@NgModule({
  imports: [Material1Components],
  exports: [Material1Components]


})


export class Material1Module { }
