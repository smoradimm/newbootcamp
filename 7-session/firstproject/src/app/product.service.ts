import { Injectable } from '@angular/core';
import{Observable, Subscriber, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  stream$=new Subject();
  byid:any;

  products: any[] = [
    {
      id:1,
      names: 'mouse',
      Image: 'assets/1.jpg',
      price :"350$",
      description:" this is the best"
    },
    {
      id:2,
      names: 'keyboard',
      Image: 'assets/2.jpg',
      price :"750$",
      description:" this is the best"
    },  
    {
      id:3,
      names: 'coolpad',
      Image: 'assets/3.jpg',
      price :"650$",
      description:" this is the best"
    },
    {
      id:4,
      names: 'monitor',
      Image: 'assets/4.jpg',
      price :"890$",
      description:" this is the best"
    },
  
  ];

reeturnbrid(){ 
 
 return this.byid
}
}
 