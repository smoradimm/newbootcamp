import { SlicePipe } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import {map, filter} from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})

export class usermanupolateService
{
  http=inject(HttpClient)

  saveinputtask(story1:any):Observable<any>
  {
   let  data={
      story:story1
    };
        
    return  this.http.post('http://localhost:4000/api/save',data)
    
  }


  showtask():Observable<any>
  {   
    return  this.http.get('http://localhost:4000/api/show',
    { headers :new HttpHeaders({"Content-Type": "application/json"})} );

  }

  edittask(data:any):Observable<any>
  {
    
   
    
    
    return  this.http.post('http://localhost:4000/api/edit',data,{ headers :new HttpHeaders({"Content-Type": "application/json"})});

  }

  delettask(id:any):Observable<any>
  {
    
    return  this.http.delete(`http://localhost:4000/api/delet/${id}`);

  }
  
}