import { Component, OnInit } from '@angular/core';
import { CompanyDetail } from '../shared/company-detail.model';
import { CompanyDetailService } from '../shared/company-detail.service';

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {

  constructor(public service: CompanyDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(cd:CompanyDetail){
    this.service.formData = Object.assign({},cd);
  }
  onDelete(CPId){
    if(confirm('Are you sure?')){
    this.service.DeleteCompanyDetail(CPId)
    .subscribe(res=>{
      this.service.refreshList();
    },
      err=>{
        console.log(err)
      })
  }
}

}
