import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/modules/login/login.component';
import { HomeComponent } from './core/modules/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';

const appRoutes: Routes = [
   
    { path: '**', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
   
];

export const routing = RouterModule.forRoot(appRoutes);