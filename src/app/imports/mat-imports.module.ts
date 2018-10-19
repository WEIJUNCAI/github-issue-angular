import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    MatListModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [
    MatListModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class MatImportsModule { }