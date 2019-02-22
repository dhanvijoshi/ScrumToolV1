import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToggleComponent } from './toggle.component';


@NgModule({
  declarations: [ToggleComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  exports: [ToggleComponent,
    MatSlideToggleModule,
   ]
})
export class ToggleModule { }
