import { Injectable } from '@angular/core';
import { Ipo } from './ipo.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class IpoService {

  
  formData:Ipo=new Ipo();
  readonly rootURL = 'http://localhost:24935/api';
  list : Ipo[];

  constructor(private http:HttpClient) { }

 PostIpo (){
    return this.http.post(this.rootURL + '/Ipo',this.formData);

  }
 PutIpo (){
    return this.http.put(this.rootURL + '/Ipo/'+this.formData.IpoId,this.formData);

  }
  DeleteIpo(id){
    return this.http.delete(this.rootURL + '/Ipo/'+id);

  }

  refreshList(){
    this.http.get(this.rootURL + '/Ipo').toPromise().then(res=> this.list = res as Ipo[]);
  }
  
}
