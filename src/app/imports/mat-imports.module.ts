import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule,
    MatProgressBarModule
  ],
  exports: [
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule,
    MatProgressBarModule
  ]
})
export class MatImportsModule { }