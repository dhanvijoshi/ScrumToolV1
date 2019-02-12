import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/modules/login/login.component';
import { HomeComponent } from './core/modules/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';
import { CommonModule } from '@angular/common';
import { UserComponent } from './core/modules/user/user.component';
import { RegisterComponent } from './core/modules/register/register.component';
import { AdduserComponent } from './core/modules/adduser/adduser.component';

export const routes: Routes = [
  {path:'', component:LoginComponent, pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  {path: 'user', component: UserComponent, canActivate:[AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'adduser', component: AdduserComponent, canActivate:[AuthGuard]}, 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
