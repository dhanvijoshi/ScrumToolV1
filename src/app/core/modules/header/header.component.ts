import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];

  constructor(private router: Router,
    private authenticationService: AuthenticationService ) { 
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
  });
}

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
