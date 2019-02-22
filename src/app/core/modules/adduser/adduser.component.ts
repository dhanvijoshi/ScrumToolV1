import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { UserService } from '../../services/user/user.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  addForm: FormGroup;
  imageUrl : string = "/assets/img/upload.png";
  fileToUpload : File = null;
  

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService) { }

  ngOnInit() { 
    this.addForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Phone: ['', Validators.required],
      Email: ['', Validators.required],
      Address: ['', Validators.required],
      imageUrl: ['',Validators.required]
    });
  }
  get f() { return this.addForm.controls; }

  onSubmit() {
    // stop here if form is invalid
    if (this.addForm.invalid) {
        return;
    }

    this.userService.register(this.addForm.value)
        .pipe(first())
        .subscribe(
            (data : any) => {
              console.log(data);
                // this.alertService.success('Registration successful', true);
                // this.router.navigate(['/login']);
            }
            // ,
            // error => {
            //     this.alertService.error(error);
            //     this.loading = false;
            // }
            );
          }

          cancel(){
            this.router.navigate(['user']);
          }

          handleFileInput(file : FileList){
            this.fileToUpload = file.item(0);       
            var  reader = new FileReader();
              reader.onload=(event:any)=>{
                this.imageUrl=event.target.result;
              }
              reader.readAsDataURL(this.fileToUpload);
          }
}
