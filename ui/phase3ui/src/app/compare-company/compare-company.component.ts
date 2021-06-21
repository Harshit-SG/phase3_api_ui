import { Component, OnInit } from '@angular/core';
import { CompanyRecordService } from '../shared/company-record.service';
import {Chart} from 'chart.js';
import { CompanyRecord } from '../shared/company-record.model';

@Component({
  selector: 'app-compare-company',
  templateUrl: './compare-company.component.html',
  styleUrls: ['./compare-company.component.css']
})
export class CompareCompanyComponent implements OnInit {
  
  
  constructor(private service: CompanyRecordService) { }

  ngOnInit(): void {

    this.service.GetCompanyRecords().subscribe(
      res=>{
        console.log(res);
        

      },
      err=>{}
    )

    

  }


}
