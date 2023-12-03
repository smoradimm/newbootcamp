import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';
import{Observable, Subscriber} from 'rxjs';
import { ProductService } from '../product.service';
import { Subject } from 'rxjs/';


@Component({
  selector: 'app-productindetail',
  standalone: true,
  imports: [ProductComponent,CommonModule , ProductComponent],
  templateUrl: './productindetail.component.html',
  styleUrl: './productindetail.component.css'
})
export class ProductindetailComponent {
  item:any;
  constructor( public product:ProductService){

this.item=product.reeturnbrid();

//console.log("hhhhhhhhhhhhhhhh");
   // this.item.names
    //console.log(this.item.names);
    //this.item=product.getbyid();
    //console.log(this.item.names);
   // this.item=product.byid;
  }

}
