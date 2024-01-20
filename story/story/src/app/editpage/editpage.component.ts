
import { usermanupolateService } from '../inputbyuser/usermanupolate.service';
import { Component, EventEmitter, Output, inject,Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import {map, filter} from 'rxjs/operators';
import { NgxSliderModule } from '@angular-slider/ngx-slider';


@Component({
  selector: 'app-editpage',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,EditpageComponent,RouterModule],
  templateUrl: './editpage.component.html',
  styleUrl: './editpage.component.css'
})
export class EditpageComponent {

  input=inject(FormBuilder);
  router=inject(Router);
nameoftask!:string
  send=inject(usermanupolateService);
  storess:any=[];
  taskshow:any[]=[];
  edit:string='';
  inputform: FormGroup=this.input.group({ story:['']});
  flag=false
  @Output() id=new  EventEmitter();

// constructor(){
//   this.send.showtask().subscribe((data)=>{
//     console.log(data);
  
//    this.storess=null
//    this.storess=data

//   })}
  ngOnInit(): void {
    this.send.showtask().subscribe((data)=>{
      console.log(data);
    
     this.storess=null
     this.storess=data
  
    })
    
  }

  Edit(item:any)
{ 
  this.id=item;
  this.router.navigate(['change'],{queryParams:{id:item}})
  
}
  
  Delet(id:any)
  {

    this.send.delettask(id).subscribe(()=>{});

    this.send.showtask().subscribe((data)=>{
      this.storess=null
      this.storess=data })
  }
}

  

