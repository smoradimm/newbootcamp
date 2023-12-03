import { Component, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ FormBuilder, FormControl ,FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-formforinput',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formforinput.component.html',
  styleUrl: './formforinput.component.scss'
})


export class FormforinputComponent {

  constructor(private fb:FormBuilder){

  }
  textforsearch:any;
  rigisterform = this.fb.group({
  fname :[''],
  lname :[''],
   tell: [''],
   email: ['']
    });

    users :any[]=[{
      name:"first name" ,
      fname:"last name",
      phone:"phone number",
      mail:"mail address"
    }];
   selectuser:any[]=[];
  onrigister(){
    var tempusers={
      name: this.rigisterform.value.fname,
      fname:this.rigisterform.value.lname,
      phone :this.rigisterform.value.tell,
      mail :this.rigisterform.value.email
    }
    this.users.push(tempusers)

    console.log(this.users);
    
  }
  OnTypeEvent(e:any){
    // if(e.target.value==" ")
    // return this.users
   
   // console.log(e.target.value);
   this.users=this.users.filter((item)=>{  return item.name==e.target.value});
  
    console.log(this.selectuser);
    
}


  }