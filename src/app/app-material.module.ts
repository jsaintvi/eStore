import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule, MatProgressSpinnerModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatGridListModule
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatGridListModule
  ],
  declarations: []
})
export class AppMaterialModule { }
