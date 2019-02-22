import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material.component';
import { MatTableModule, MatToolbarModule, MatInputModule, MatIconModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import {  MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';
import { ToggleModule } from '../toggle/toggle.module';

@NgModule({
  declarations: [MaterialComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule, 
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ToggleModule
  ],
  exports: [MaterialComponent,
    MatPaginatorModule,
    MatSortModule,]
})
export class MaterialModule { }
