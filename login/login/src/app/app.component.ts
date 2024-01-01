import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { userService } from './user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  input=inject(FormBuilder);
  sruser=inject(userService);
  nameoftask!:string
   // send=inject(usermanupolateService);
    tasks:any[]=[];
    inputform: FormGroup=this.input.group({ name:['',Validators.required], pass:['',Validators.required]});
    
    saveuser()
    {
      
        this.sruser.saveuser(this.inputform.value)
       
      

         console.log(this.inputform.value);
        // this.send.saveinputtask(this.inputform.value).subscribe(()=>console.log("send"));
        // this.inputform.reset();
        // this.flag=true
        // this.send.showtask().subscribe((data)=>{
        //   console.log(data)
        //   data.forEach((element: any) => {
        //     this.tasks.push(element.title)
        //     this.flag=false
        //   });
        //   console.log(this.tasks)
     //   })
        //this.SRt.saveinputtask(this.inputform.value).subscribe(() => console.log("kkkkkkkkkk"));
       // this.SRt.saveinputtask(this.inputform.value).subscribe(()=>{})
        
    }

}
