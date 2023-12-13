import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {

  constructor(private http:HttpClient) { }


  // sendMessage(chat_id:number,text:string){
  //   return this.http.get( `https://api.telegram.org/bot6347123369:AAERAJjd6bssvsGZAdlpmJT6QnY7SgQsGKs/sendMessage?chat_id=${chat_id}&text=${text}`)
  // }

  sendPhoto(chat_id:number,photo:string,caption:string){
    var data={
        chat_id:chat_id,
        photo:photo,
        caption:caption
    }
    return this.http.post( `https://api.telegram.org/bot6492151089:AAGUzQB3SenfgVEfovlbXkWnYy9Wwl-SmNY/sendPhoto`,data)
  }
  
  sendMessage(chat_id:number,text:string,reply_markup:any){
//console.log(reply_markup);


    var data={
      chat_id:chat_id,
      text:text,
      reply_markup:{keyboard:reply_markup}
    }
    return this.http.post( `https://api.telegram.org/bot6492151089:AAGUzQB3SenfgVEfovlbXkWnYy9Wwl-SmNY/sendMessage`,data)
  }
}
