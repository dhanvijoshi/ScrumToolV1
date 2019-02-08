import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router,
    private authenticationService: AuthenticationService ) { }

  ngOnInit() {
  }

  user(){
    this.router.navigate(['/user']);
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
