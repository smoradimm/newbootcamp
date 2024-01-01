import { Component, EventEmitter, Output, inject,Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { usermanupolateService } from './usermanupolate.service';


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
  tasks:any[]=[];
  taskshow:any[]=[];
  edit:string='';
  inputform: FormGroup=this.input.group({ nameoftask:['',Validators.required]});
  flag=false

  onsavetask(flag:any)
  {
    if(flag==0){
     
      console.log(this.tasks);
      this.send.saveinputtask(this.inputform.value).subscribe(()=>console.log("send"));
      
      this.flag=true
      this.send.showtask().subscribe((data)=>{
        console.log("cliiiiiient",data)
        data.forEach((element: any) => {
          this.tasks.push(element.title)
          //this.flag=false
        });
        console.log(this.tasks)
        this.inputform.reset();
      })
    }else if(flag==1){
    this.edit=this.inputform.value.nameoftask
    console.log("this.edit",this.edit);
    
    }
    
  }
  Edit(item:any)
   {

    this.onsavetask(1)
    let  task={
      id:item.id,
      title:this.edit,
      isdon:false
  };
  console.log("this.77777777777777edit",task);
       this.send.edittask(task).subscribe(()=>{});
    
  }
  Delet(id:any)
  {
    console.log(id);
    
    this.send.delettask(id).subscribe(()=>{});
  }
  Done(item:any){
    this.send.donetask(item).subscribe(()=>{});
  }
constructor()
{

  this.send.showtask().subscribe((data)=>{
    console.log("cliiiiiient",data)

    
    data.forEach((element: any) => {
     this.taskshow.push(element)
      
    });
    
    // console.log(this.tasks)
    // this.inputform.reset();
  })
  
}

}
