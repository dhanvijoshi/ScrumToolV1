import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
     }

     login(username: string, password: string) { //this function will return an observable
      var data="&username=" + username + "&password=" + password + "&grant_type=password";
      var reqHeader = new HttpHeaders({'content-type':'application/x-www-form-urlencoded', 'No-Auth':'True'}); //there are some functions that do not need authorisation so we will by-pass those functions using property i.e.no-auth=true
      return this.http.post(`${environment.apiUrl}/authenticate` ,data, {headers: reqHeader}).pipe(map((user:any) =>{
               // login successful if there's a jwt token in the response
               if (user && user.access_token) {
                   // store user details and jwt token in local storage to keep user logged in between page refreshes
                   localStorage.setItem('currentUser', JSON.stringify(user));
                   this.currentUserSubject.next(user);
               }
               return user;
           }));
  }
logout() {
  // remove user from local storage to logout user
  localStorage.removeItem('currentUser');
  this.currentUserSubject.next(null);
}
}
