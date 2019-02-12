import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, retry } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor { //this class will be injected at other places where it is needed
    //once the HttpInterceptor is implemented all http requests will be passed through "intercept" function
    
    constructor(
        private authenticationService: AuthenticationService,
        private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { //inside this function we will append bearer access token to every request
        //and we will handle for not one unauthorised data score
        // add authorization header with jwt token if available
        debugger;
        if(request.headers.get('No-Auth')=="True")
        return next.handle(request.clone());

        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.access_token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${currentUser.access_token}`
                }
            });
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        // setting the accept header
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        return next.handle(request).pipe(           
            catchError(this.handleError)
          );
    }

    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
      }
     

}
