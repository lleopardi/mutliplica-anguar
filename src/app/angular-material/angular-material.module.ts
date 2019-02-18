import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
  ]
})
export class AngularMaterialModule { }
