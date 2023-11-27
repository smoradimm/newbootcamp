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
search($event: Event) {
throw new Error('Method not implemented.');
}
  constructor(private fb:FormBuilder){

  }
  
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
    
    
    console.log(e.target.value);
    this.users.filter(({name})=>name===e.target.value);
}


  }