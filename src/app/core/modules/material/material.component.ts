import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { User } from '../../models/user/user';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { HttpClient } from '@angular/common/http';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  constructor(private router: Router,
    private http: HttpClient,
    private userService: UserService,
    private authenticationService: AuthenticationService) {
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
   }

   startDate = new Date(1990, 0, 1);
   selectedValue: string;
   listData: MatTableDataSource<User>;
   displayedColumns: string[] = ['FirstName', 'LastName', 'actions'];
   currentUser: User;
   currentUserSubscription: Subscription;
   users: any = [];
   locations = [
    {value: '1', viewValue: 'Test-1'},
    {value: '2', viewValue: 'India'},
    {value: '3', viewValue: 'MHS Region South'},
    {value: '4', viewValue: 'Munkholmen'}
  ];
 
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.loadAllUsers();
  }

  ngOnDestroy(): void {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
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
    this.userService.getAllUsersByFacility(17)
      .pipe(first())
        .subscribe((result) => {
        console.log(result);
        this.listData = new MatTableDataSource(result.Data); 
        this.listData.paginator = this.paginator;
        this.listData.sort = this.sort;
    });
    
  }

  applyFilter(filterValue: string) {
    this.listData.filter = filterValue.trim().toLowerCase();

    if (this.listData.paginator) {
      this.listData.paginator.firstPage();
    }
  }
  toggle(){
    this.router.navigate(['/toggle']);
  }

}

