import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserServices } from '../services/users.service';

@Component({
  selector: 'app-addtomywallet',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './addtomywallet.component.html',
  styleUrl: './addtomywallet.component.scss'
})
export class AddtomywalletComponent {

  constructor(private fb: FormBuilder , private userService: UserServices ) {}

  form : FormGroup = this.fb.group({
    amount: ['', Validators.required]
  })

  onHandleAddMoney() {
    var token = this.userService.getTokenFromLocalStorage()
    // console.log(this.form.value.amount);
    // console.log(token);
    this.userService.addMoneyToWallet(token , this.form.value.amount).subscribe({
      next: (data) => {

      },
      error: (error) => {
        console.log(error);

      },
      complete: () =>{

      }
    })


  }
}
