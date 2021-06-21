import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  formModel={
    UserName: '',
    Password: ''
  }
  userDetails;

  constructor(private service: UserService, private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null){
      this.router.navigateByUrl('/adminhome');
    }

    // this.service.getUserProfile().subscribe(
    //   res=>{
    //     this.userDetails=res;
    //   },
    //   err=>{
    //     console.log(err);
    //   }
    // );
  }

  onSubmit(form:NgForm){
    this.service.login(form.value).subscribe(
      (res:any)=>{
        localStorage.setItem('token',res.token);
        this.router.navigateByUrl('/adminhome');
      },
      err=>{
        if(err.status == 400){
          this.toastr.error('Incorrect Username or passord','Authentication Failed ');
        }
        else
        console.log(err);
      }      
    );

  }

}
