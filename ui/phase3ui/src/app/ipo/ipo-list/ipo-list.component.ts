import { Component, OnInit } from '@angular/core';
import { Ipo } from 'src/app/shared/ipo.model';
import { IpoService } from 'src/app/shared/ipo.service';

@Component({
  selector: 'app-ipo-list',
  templateUrl: './ipo-list.component.html',
  styleUrls: ['./ipo-list.component.css']
})
export class IpoListComponent implements OnInit {

  constructor(public service: IpoService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(cd:Ipo){
    this.service.formData = Object.assign({},cd);
  }
  onDelete(IpoId){
    if(confirm('Are you sure?')){
    this.service.DeleteIpo(IpoId)
    .subscribe(res=>{
      this.service.refreshList();
    },
      err=>{
        console.log(err)
      })
  }
}

}
