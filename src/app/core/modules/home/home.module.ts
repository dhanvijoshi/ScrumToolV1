import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { UserModule } from '../user/user.module';
import { LoginModule } from '../login/login.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    UserModule,
    AppRoutingModule, 
    HttpClientModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
