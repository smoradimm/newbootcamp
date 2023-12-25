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
          title:"mozzzzzzzzz",
          isdon:false
      };
     
    console.log(task);
    
    return  this.http.post('http://localhost:4000/api/save',task,{ headers :new HttpHeaders({"Content-Type": "application/json"})});

  }


  showtask():Observable<any>
  {   
    return  this.http.get('http://localhost:4000/api/show');

  }
  
}