import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean  {
  debugger;
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      debugger;
        // authorised so return true
        console.log('currentUser');
        return true;
    }        

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
}
}
