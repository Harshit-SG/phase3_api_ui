import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompanyDetailService } from '../shared/company-detail.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  constructor(public service: CompanyDetailService ) { }

  ngOnInit(): void {
    this.resetFrom();
  }


  resetFrom(form?: NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      CPId: 0,
      CompanyName: '',
      CEO: '',
      Turnover: '',
      Description: '',
    }
  }
  onSubmit(form: NgForm){
    if(this.service.formData.CPId==0)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.PostCompanyDetail().subscribe(
      res => {
        this.resetFrom(form);
        this.service.refreshList();
      },
      err => {
        console.log(err)
      }
    )
  }
  updateRecord(form: NgForm){
    this.service.PutCompanyDetail().subscribe(
      res => {
        this.resetFrom(form);
        this.service.refreshList();
      },
      err => {
        console.log(err)
      }
    )
  }

}
