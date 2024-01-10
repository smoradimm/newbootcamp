import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServices } from '../services/users.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private fb: FormBuilder , private userService: UserServices) {}
  router = inject(Router)

  form : FormGroup = this.fb.group({
    mobile:['' , Validators.required],
    password:['' , Validators.required]
  })


  onSignUp() {
    this.userService.signUp(this.form.value.mobile , this.form.value.password).subscribe({
      next: (data) => {
        console.log(data);
        this.userService.setTokenToLocalStorage(data)
        this.router.navigateByUrl("home")

      },
      error: (error) => {
        console.log(error);

      },
      complete: () =>{

      }
    })
  }

  // onLogin() {
  //   this.userService.login(this.form.value.mobile , this.form.value.password).subscribe({
  //     next: (data) => {
  //       // console.log(data);
  //       this.userService.setTokenToLocalStorage(data)
  //       this.router.navigateByUrl("home")
  //     },
  //     error: (error) => {

  //     },
  //     complete: () =>{

  //     }
  //   })
  // }

}
