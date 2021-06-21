import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { element } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder, private http: HttpClient) { }
  readonly baseURI ='http://localhost:14060/api';

  formModel = this.fb.group({
    UserName :['', Validators.required],
    Email :['', Validators.email],
    FullName :[''],
    Passwords : this.fb.group({
    Password :['',[Validators.required,Validators.minLength(4)]],
     ConfirmPassword :['',Validators.required]
    },{validators: this.comparePasswords })   
    
  });

  comparePasswords(fb:FormGroup){
    let confirmPswdCtrl = fb.get('ConfirmPassword');


    if(confirmPswdCtrl.errors == null || 'passwordMismatch' in confirmPswdCtrl.errors){
    if(fb.get('Password').value!= confirmPswdCtrl.value )
    confirmPswdCtrl.setErrors({ passwordMismatch: true});
    else
    confirmPswdCtrl.setErrors(null);
    }
  }

  register() {
    var body = {
      UserName : this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password

    };
    return this.http.post(this.baseURI+'/ApplicationUser/Register',body);
  }

  login(formData){
    return this.http.post(this.baseURI+'/ApplicationUser/Login',formData);
  }

  getUserProfile(){
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer ' + localStorage.getItem('token')});
    return this.http.get(this.baseURI+'/UserProfile',{headers: tokenHeader});
  }

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var payLoad = JSON.parse( window.atob(localStorage.getItem('token').split('.')[1]) );
    var userRole = payLoad.role;
    allowedRoles.forEach(element=> {
      if(userRole== element){
        isMatch =true;
        return false;
      }
    });
    return isMatch;
  }
}
