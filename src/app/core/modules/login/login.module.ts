import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { HomeModule } from '../home/home.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule, 
    HttpClientModule,
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
