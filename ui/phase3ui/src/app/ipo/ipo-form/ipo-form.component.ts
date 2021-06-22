import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/shared/ipo.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-ipo-form',
  templateUrl: './ipo-form.component.html',
  styleUrls: ['./ipo-form.component.css']
})
export class IpoFormComponent implements OnInit {

  constructor(public service: IpoService ) { }

  ngOnInit(): void {
    this.resetFrom();
  }


  resetFrom(form?: NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      IpoId: 0,
      CompanyName: '',
      BiddingDates: '',
      PriceRange: '',
      IssueSize: '',
      ManagingDirector: ''
    }
  }
  onSubmit(form: NgForm){
    if(this.service.formData.IpoId==0)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.PostIpo().subscribe(
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
    this.service.PutIpo().subscribe(
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
