import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import readXlsxFile from 'read-excel-file';
import { CompanyRecordService } from '../shared/company-record.service';
import { CompanyDetail } from '../shared/company-detail.model';
import { templateJitUrl } from '@angular/compiler';
import { CompanyRecord } from '../shared/company-record.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.css']
})
export class ImportDataComponent implements OnInit {

//   shortLink: string = "";
//   loading: boolean = false;
//   file: File = null;

//   constructor(private fileUploadService: FileUploadService) { }

//   ngOnInit(): void {
//   }

//   onChange(event) {
//     this.file = event.target.files[0];
// }

// // OnClick of button Upload
// onUpload() {
//     this.loading = !this.loading;
//     console.log(this.file);
//     this.fileUploadService.upload(this.file).subscribe(
//         (event: any) => {
//             if (typeof (event) === 'object') {

//                 // Short link via api response
//                 this.shortLink = event.link;

//                 this.loading = false; // Flag variable 
//             }
//         }
//     );
// }

    constructor(public service: CompanyRecordService,private toastr: ToastrService) { }

    

    ngOnInit(): void {
    }

    fileReaded: File = null;
    temp: CompanyRecord = new CompanyRecord();

    CompanyRecords:any[];
    excelRead(e){
        
        this.fileReaded =e.target.files[0];
        let type = e.target.files[0].name.split('.').pop();
        this.CompanyRecords=[];

    const schema = {
        'Company Code': {
          prop: 'CompanyCode',
          type: Number
        },
        'Price Per Share(in Rs)': {
          prop: 'PricePerShare',
          type: String
        },
        'Date': {
          prop: 'Date',
          type: String
        },
        'Time': {
          prop: 'Time',
          type: String
        }
      }
      
      readXlsxFile(e.target.files[0], { schema, cellDates: true }).then((data) => {
          
              for(let i of data.rows)
              {
                this.temp.CompanyCode = i.CompanyCode.toString();
                this.temp.PricePerShare = i.PricePerShare.toString();
                this.temp.Date = i.Date.toString();
                this.temp.Time = i.Time.toString();
                this.temp.RcId = 0;
                this.service.PostCompanyRecords(this.temp).subscribe(
                    res=>{},
                    err=>{
                        console.log(err);
                    }
                )
              }
            console.log(data);
          
      });
    }

    onUpload(){

        this.toastr.success('Uploaded Successfully', 'Company Records');    
    }

}
