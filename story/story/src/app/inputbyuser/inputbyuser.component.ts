import { Component, EventEmitter, Output, inject,Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { usermanupolateService } from './usermanupolate.service';
//import { filter, map } from 'rxjs';
import {map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-inputbyuser',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './inputbyuser.component.html',
  styleUrl: './inputbyuser.component.css'
})
export class InputbyuserComponent {
  input=inject(FormBuilder);
nameoftask!:string
  send=inject(usermanupolateService);
  storess:any=[];
  taskshow:any[]=[];
  edit:string='';
  inputform: FormGroup=this.input.group({ story:['']});
  flag=false

  onsavestory()
  {
    
     
      
      this.send.saveinputtask(this.inputform.value.story).subscribe(()=>console.log("send"));
      
      this.send.showtask().subscribe((data)=>{
        console.log(data);
        
       this.storess=null
       this.storess=data

      })
    
  }
Edit(item:any)
{
  let  data={
    id:item,
    story:this.inputform.value.story
  };
  
  
  this.send.edittask(data).subscribe((data)=>console.log("send"));
 
  this.send.showtask().subscribe((data)=>{
   this.storess=null
   this.storess=data })
  
}
  
  Delet(id:any)
  {

    this.send.delettask(id).subscribe(()=>{});

    this.send.showtask().subscribe((data)=>{
      this.storess=null
      this.storess=data })
  }
 
      
}
