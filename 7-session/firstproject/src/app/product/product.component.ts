import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import{Observable, Subscriber, Subject} from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule ,  FormsModule , ReactiveFormsModule ,RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
items: any[]=[];

  constructor(public product: ProductService, private router :Router){
   
this.items = product.products;

}
seedetailes(item:any){
 
  this.product.byid=item

 this.router.navigateByUrl("/productindetail");
 
  }


}
