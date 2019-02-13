import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { LoginModule } from '../login/login.module';
import { AdduserModule } from '../adduser/adduser.module';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    AdduserModule,
    DataTablesModule,
    AppRoutingModule, 
    HttpClientModule,
  ],
  exports: [UserComponent]
})
export class UserModule { }
