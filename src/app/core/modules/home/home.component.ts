import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { User } from '../../models/user/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];

  constructor( private router: Router,
    private authenticationService: AuthenticationService ) { 
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        this.currentUser = user;
    });
    }

  ngOnInit() {
    debugger;
    
  }

  user(){
    this.router.navigate(['/user']);
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
