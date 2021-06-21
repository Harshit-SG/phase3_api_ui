import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }

  onSubmit(){
    this.service.register().subscribe(
      (res : any)=>{
        if(res.succeeded){
          this.service.formModel.reset();
          this.toastr.success('New User added!', 'Registration Successful');
        }else{
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Username already Taken', 'Registration failed');
                
                break;
            
              default:
                this.toastr.error(element.description, 'Registration failed');
                break;
            }
            
          });
        }

      },
      err=>{
        console.log(err);
      }

    ); 
  }

}
