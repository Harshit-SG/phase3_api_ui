import { Injectable } from '@angular/core';
import { CompanyRecord } from './company-record.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CompanyRecordService {
  rowData:CompanyRecord= new CompanyRecord();
  readonly rootURL = "http://localhost:24935/api";

  constructor(private http: HttpClient) { }

  PostCompanyRecords (rowData: CompanyRecord){
    return this.http.post(this.rootURL + '/CompanyRecord', rowData);
  }
  GetCompanyRecords(){
    return this.http.get(this.rootURL +'/CompanyRecord');
  }
}
