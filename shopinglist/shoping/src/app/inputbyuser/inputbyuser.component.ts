import { Component, inject } from '@angular/core';
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
  inputform: FormGroup=this.input.group({ nameoftask:['',Validators.required]});
  flag=false
  onsavetask()
  {
    
     
      console.log(this.tasks);
      this.send.saveinputtask(this.inputform.value).subscribe(()=>console.log("send"));
      this.inputform.reset();
      this.flag=true
      this.send.showtask().subscribe((data)=>{
        console.log(data)
        data.forEach((element: any) => {
          this.tasks.push(element.title)
          this.flag=false
        });
        console.log(this.tasks)
      })
      //this.SRt.saveinputtask(this.inputform.value).subscribe(() => console.log("kkkkkkkkkk"));
     // this.SRt.saveinputtask(this.inputform.value).subscribe(()=>{})
      
  }
}
