import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';



import {  playService } from './play.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable,inject } from '@angular/core'

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [CommonModule, RouterOutlet ,FormsModule, ReactiveFormsModule],
  templateUrl: './play.component.html',
  styleUrl: './play.component.css'
})
export class PlayComponent {

  player1!:any;
  gain1=0;
  player2!:any;
  gain2=0;
  user1isregister:boolean=false;
 towuserisregister:boolean=false;
 gain=0
 win="";
 winner:boolean=false;
  constructor(public form:FormBuilder, private servicha:playService, privatehttp:HttpClient){}

  Aform = this.form.group({
    name1 :['']
      });

   Bform = this.form.group({
        name2 :['']
          });

  onclick1()
  {
     this.player1=this.Aform.value.name1;
     this.user1isregister=true;
     
  }

 onclick2()
  {
   if (this.user1isregister)
       {
         this.towuserisregister=true;
           this.player2=this.Bform.value.name2;
           this.servicha.sendtoserver(this.player1,this.player2).subscribe(data =>{
            console.log("data send to server");  })

       }
       else
       {
         console.log("please register player one");
         

       }
    
  }  
  start()
  {
    
    this.gain=this.servicha.getranomnumber();
    console.log(this.gain1)
    if(this.gain<4)
    {
    this.gain1++
    }
    else{
      this.gain2++
    }
    if(this.gain1==5)
    {
      this.winner=true
      this.win="first player is winner"       
    }
    else if(this.gain1==5)
    {
      this.winner=true
      this.win="second player is winner"       
    }
  }
 }
