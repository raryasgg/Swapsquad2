import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatChipsModule} from '@angular/material/chips';

const MaterialComponents=[
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  FlexLayoutModule,
  MatPaginatorModule,
  MatChipsModule

]

@NgModule({

  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class Material1Module { }
