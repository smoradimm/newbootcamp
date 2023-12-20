import { HttpClient,HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})

export class playService
{
    constructor(private http:HttpClient)
    {

    }
    sendtoserver(nameofplayer1:any,nameofplayer2:any):Observable<any>
    {
        var data={
            player1:nameofplayer1,
            player2:nameofplayer2
        }
        console.log(data);
        return this.http.post('http://localhost:4000', data, {headers:new HttpHeaders({"Content-Type":"Application/json"})});
       
        
    }

    getfromserver():Observable<any>
    {
        return this.http.get('http://localhost:4000');
              
    }
    getranomnumber():number
    {
        return  (1+Math.floor (Math.random () * 6));
    }
}

