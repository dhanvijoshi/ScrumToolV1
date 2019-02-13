import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './core/guards/auth.guard';
import { JwtInterceptor } from 'src/app/core/interceptors/jwt.interceptor';
import { DataTablesModule } from 'angular-datatables';
import { AdduserModule } from './core/modules/adduser/adduser.module';
import { UserModule } from './core/modules/user/user.module';
import { FooterModule } from './core/modules/footer/footer.module';
import { HeaderModule } from './core/modules/header/header.module';
import { HomeModule } from './core/modules/home/home.module';
import { LoginModule } from './core/modules/login/login.module';
import { RegisterModule } from './core/modules/register/register.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    AdduserModule,
    FooterModule,
    HeaderModule,
    HomeModule,
    LoginModule,
    RegisterModule,
    UserModule,
  ],
  exports:[
    AdduserModule,
    FooterModule,
    HeaderModule,
    HomeModule,
    LoginModule,
    RegisterModule,
    UserModule
  ],
  providers: [AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
