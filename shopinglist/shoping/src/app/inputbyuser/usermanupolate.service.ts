import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn:'root'
})

export class usermanupolateService
{
  http=inject(HttpClient)

  saveinputtask(task:any):Observable<any>
  {
    
    let  onetask={
          title:task.nameoftask,
          isdon:false
      };
     
    console.log(task);
    
    return  this.http.post('http://localhost:4000/api/save',onetask,{ headers :new HttpHeaders({"Content-Type": "application/json"})});

  }


  showtask():Observable<any>
  {   
    return  this.http.get('http://localhost:4000/api/show',{ headers :new HttpHeaders({"Content-Type": "application/json"})} );

  }

  edittask(item:any):Observable<any>
  {
    return  this.http.post('http://localhost:4000/api/edit',item,{ headers :new HttpHeaders({"Content-Type": "application/json"})});

  }

  delettask(id:any):Observable<any>
  {
    console.log(id);
    return  this.http.delete(`http://localhost:4000/api/delet/${id}`);

  }
  
  donetask(item:any):Observable<any>
  {
    let  onetask={
      id:item.id,
      title:item.title,
      isdon:false
  };
  console.log(item);
  
    return  this.http.post('http://localhost:4000/api/don',item,{ headers :new HttpHeaders({"Content-Type": "application/json"})});
    
  }
}