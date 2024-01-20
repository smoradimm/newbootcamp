import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable , inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserServices {

  http = inject(HttpClient)
  router = inject(Router)
  private readonly _authStorageToken: string = "authToken";
  isLogin: boolean = false;
  token !: any

  signUp(mobile : string , password : string) : Observable <any> {
    var data = {
      mobile : mobile ,
      password : password
    }
    return this.http.post('http://localhost:5000/api/user/signup',data)
  }


  login(mobile : string , password : string) : Observable <any> {
    var data = {
      mobile : mobile ,
      password : password
    }
    return this.http.post('http://localhost:5000/api/user/login',data)
  }

  setTokenToLocalStorage(token : any) {
    localStorage.setItem(this._authStorageToken, token);
    this.isLogin = true;
  }

  getTokenFromLocalStorage() : string {
    // return localStorage.getItem(this._authStorageToken) as string
    this.token = localStorage.getItem(this._authStorageToken)
    return this.token
  }

  removeTokenFromLocalStorage() {
    localStorage.removeItem(this._authStorageToken);
  }

  checkUserAuthenticate() {
    // if (this.getTokenFromLocalStorage())
    if(!this.isLogin)
    console.log("service check -checkUserAuthenticate- successfully");
  }

  logout() {
    this.removeTokenFromLocalStorage() , this.isLogin = false;
    this.router.navigateByUrl("home");
  }

  addMoneyToWallet(token : string , amount_wallet : number): Observable <any> {
    var data = {
      token : token ,
      amount_wallet : amount_wallet
    }
    return this.http.post('http://localhost:5000/api/user/addtomywallet',data)
  }
}
