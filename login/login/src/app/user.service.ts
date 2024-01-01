import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn:'root'
})

export class userService
{
  http=inject(HttpClient)

  saveuser(user:any)
  //:Observable<any>
  {
    // let  users={
    //       name:" ",
    //       pass:false
    //   };
     
    
    // return  this.http.post('http://localhost:4000/api/save',users,{ headers :new HttpHeaders({"Content-Type": "application/json"})});

  }


  showtask():Observable<any>
  {   
    return  this.http.get('http://localhost:4000/api/show');

  }
  
}