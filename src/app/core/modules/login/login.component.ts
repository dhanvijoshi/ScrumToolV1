import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { 
    if (this.authenticationService.currentUserValue) { 
      this.router.navigate(['home']);
    }
   }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
  else{
    console.log(this.loginForm.value);
    this.authenticationService.login(this.f.username.value, this.f.password.value)
    .pipe(first())
      .subscribe(
        (data : any)=>{
          debugger;
          localStorage.setItem('userToken',data.access_token);
          this.router.navigate(['home']);
          })
          return;         
        }
                
  }
}
