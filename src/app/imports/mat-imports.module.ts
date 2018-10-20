import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule
  ],
  exports: [
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule
  ]
})
export class MatImportsModule { }