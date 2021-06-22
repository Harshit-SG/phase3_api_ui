import { Component, OnInit } from '@angular/core';
import { CompanyRecordService } from '../shared/company-record.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { CompanyRecord } from '../shared/company-record.model';

@Component({
  selector: 'app-compare-company',
  templateUrl: './compare-company.component.html',
  styleUrls: ['./compare-company.component.css']
})
export class CompareCompanyComponent implements OnInit {  

  private temp = [];

  public date = [];
  public prices = [];

  constructor(private service: CompanyRecordService) { }


  ngOnInit(): void {

    this.service.GetCompanyRecords().subscribe(
      res=>{
        this.temp.push(res);

        for(var  i of this.temp[0]){
          this.prices.push(i.PricePerShare);
        }

        console.log(this.prices);
        for(var  i of this.temp[0]){
          this.date.push(i.Date);
        }

        console.log(this.date);
        
      },
      err=>{}
    )    

  }

  lineChartData: ChartDataSets[] = [
    { data: this.prices, label: 'Stock prices' },
  ];

  lineChartLabels: Label[] = this.date;

  lineChartOptions = {
    responsive: true,
    elements: {
      line: {
          tension: 0
      }
  }
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  


}
