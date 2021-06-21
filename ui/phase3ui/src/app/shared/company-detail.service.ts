import { Injectable } from '@angular/core';
import { CompanyDetail } from './company-detail.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailService {
  formData:CompanyDetail=new CompanyDetail();
  readonly rootURL = 'http://localhost:24935/api';
  list : CompanyDetail[];

  constructor(private http:HttpClient) { }

 PostCompanyDetail (){
    return this.http.post(this.rootURL + '/CompanyDetail',this.formData);

  }
 PutCompanyDetail (){
    return this.http.put(this.rootURL + '/CompanyDetail/'+this.formData.CPId,this.formData);

  }
  DeleteCompanyDetail(id){
    return this.http.delete(this.rootURL + '/CompanyDetail/'+id);

  }

  refreshList(){
    this.http.get(this.rootURL + '/CompanyDetail').toPromise().then(res=> this.list = res as CompanyDetail[]);
  }
}
