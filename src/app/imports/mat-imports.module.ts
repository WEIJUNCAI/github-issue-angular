import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule,
    MatProgressBarModule,
    MatPaginatorModule
  ],
  exports: [
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule,
    MatProgressBarModule,
    MatPaginatorModule
  ]
})
export class MatImportsModule { }