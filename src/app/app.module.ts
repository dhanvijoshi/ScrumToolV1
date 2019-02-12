import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/modules/home/home.component';
import { LoginComponent } from './core/modules/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './core/guards/auth.guard';
import { JwtInterceptor } from 'src/app/core/interceptors/jwt.interceptor';
import { UserComponent } from './core/modules/user/user.component';
import { HeaderComponent } from './core/modules/header/header.component';
import { FooterComponent } from './core/modules/footer/footer.component';
import { DataTablesModule } from 'angular-datatables';
import { RegisterComponent } from './core/modules/register/register.component';
import { AdduserComponent } from './core/modules/adduser/adduser.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
