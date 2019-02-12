import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { User } from '../../models/user/user';
import { Subject } from 'rxjs';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentUser: User;
  currentUserSubscription: Subscription;
  dtOptions: DataTables.Settings = {};
  users: any = [];
  dtTrigger: Subject<any> = new Subject();


  constructor(private router: Router,
    private http: HttpClient,
    private userService: UserService,
    private authenticationService: AuthenticationService )
     { 
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        this.currentUser = user;
    });
    }

  ngOnInit() {
    this.loadAllUsers();
  }

  ngOnDestroy(): void {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  deleteUser(Id: string, UserName: string) {
    this.userService.delete(Id,UserName)
     .pipe(first())
        .subscribe(data => {
        this.users = this.users.filter(u => u !== Id);            
        this.loadAllUsers();
    });
  }

  private loadAllUsers() {
    this.dtOptions = { 
        pagingType: 'full_numbers',
        pageLength: 2
        };
    this.userService.getAllUsersByFacility(17)
      .pipe(first())
         .subscribe(result => {
        this.users = result.Data;
        console.log(this.users);
        this.dtTrigger.next();
    });
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  add(){
    this.router.navigate(['/adduser']);
  }
}
