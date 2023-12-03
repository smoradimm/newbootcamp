import { Injectable } from '@angular/core';
import{Observable, Subscriber} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

    stream$ = new Observable();
  isLogin: boolean = false;

  users: any[] = [
    {
      usernames: 'alireza',
      password: '1234',
      Image: 'assets/11.jpg',
      isLoginn :false
    },
    {
      usernames: 'zahra',
      password: '12345',
      Image: 'assets/22.jpg',
      isLoginn :false
    },
    {
      usernames: 'somayyeh',
      password: '12345',
      Image: 'assets/33.jpg',
      isLoginn :false
    }
  ];
//   userlogined(user: any): any {
//     return user;
//   }

logedinuser:any;

  login(username: string, password: string): boolean {
    let user: any = this.users.filter(
      (check) => check.usernames == username && check.password == password
    );

    if (user.length > 0) {
     this.logedinuser=user[0];

     this.stream$.subscribe({
         next: (data) => {
            data=this.logedinuser;
        
        
        console.log(data);
        
        }});
          
            
     



      this.isLogin = true;
      return true;
    } else {
      return false;
    }
    console.log(username, password);
  }
}
