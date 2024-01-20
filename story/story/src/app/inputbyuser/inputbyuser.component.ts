import { Component, EventEmitter, Output, inject,Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { usermanupolateService } from './usermanupolate.service';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import {map, filter} from 'rxjs/operators';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { EditpageComponent } from '../editpage/editpage.component';

@Component({
  selector: 'app-inputbyuser',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,EditpageComponent,RouterModule],
  templateUrl: './inputbyuser.component.html',
  styleUrl: './inputbyuser.component.css'
})
export class InputbyuserComponent {
  input=inject(FormBuilder);
  router=inject(Router);
  rout=inject(ActivatedRoute)
nameoftask!:string
  send=inject(usermanupolateService);
  storess:any=[];
  taskshow:any[]=[];
  edit:any='';
  flag:boolean=false
  inputform: FormGroup=this.input.group({ story:['']});
  //id:any!
 // @Input() id=new EventEmitter();
constructor(private routt:ActivatedRoute){}
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }
  ngOnInit(): void {
 
  this.edit=this.routt.snapshot.queryParamMap.get('id')
  console.log(this.edit);
  
    if(this.edit>0)
         {this.flag=true
           console.log("true");
}    
    
  }




  

  onsavestory()
  {
    if(!this.flag){
    
      this.send.saveinputtask(this.inputform.value.story).subscribe(()=>console.log("send"));

      
      
    }else{
      this.chage(this.edit);
    }
    this.router.navigateByUrl("edit");
  }
chage(item:any)
{
  console.log("chang"+this.inputform.value.story);
  
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
