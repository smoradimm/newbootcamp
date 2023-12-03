import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { IndetailesComponent } from '../indetailes/indetailes.component';

@Component({
  selector: 'app-detailes',
  standalone: true,
  imports: [CommonModule,RouterOutlet,IndetailesComponent],
  templateUrl: './detailes.component.html',
  styleUrl: './detailes.component.scss'
})
export class DetailesComponent {
  constructor(private router: Router){

  }
  toshowdetail(a:any){
   // this.router.navigateByUrl()
     
  }
  users:any[]=[
    {
      id:1,
      name:"alireza",
      university:"zanjan",
      userimage:"assets/1.jpg"
    
    },
    {
      id:2,
      name:"alirezaa",
      university:"zanjann",
       userimage:"assets/2.jpg"
    },
    {
      id:3,
      name:"alirezaaa",
      university:"zanjannn",
      userimage:"assets/3.jpg"
    }
  ];
}
