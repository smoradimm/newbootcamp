import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {TelegramService} from "./telegram-service.service"
@Component({
  selector: 'app-telegram',
  standalone: true,
  imports: [CommonModule, HttpClientModule,ReactiveFormsModule],
  templateUrl: './telegram.component.html',
  styleUrl: './telegram.component.scss',
})
export class TelegramComponent {
  constructor(private telegramService: TelegramService,
    private formBuilder: FormBuilder
    ) {}
  caht_id: number[] = [5990749861];
    
  
  ngOnInit(): void {
    this.addItems()
    
  }
  errorMessage:string|null = null;
  form:FormGroup=this.formBuilder.group({
    text:["",Validators.required],
    photo:["",Validators.required],
    caption:["",Validators.required],
    button:[""],
    
    items:this.formBuilder.array([])
  })


  get items():FormArray{
    return this.form.get('items') as FormArray;
  }

  addItems(){
    this.items.push(this.formBuilder.group({
      name:[""]
       }))
  }

  removeAt(index:number){
    this.items.removeAt(index)
  }

convertlistToTelegramFormat(list:any[]){
  var arrayOfTelegramFormat:any=[]

      let bottonnumber = this.form.value.button;


      for (let index = 0; index<= list.length; index += bottonnumber) {
        console.log(index)
        var bottoninrow = list.slice(index, index + bottonnumber).map(element => ({
          text: element.name,
          callback_data: element.name
        }));

        arrayOfTelegramFormat.push(bottoninrow);
      }
      return arrayOfTelegramFormat

 }


  submite(){
    this.errorMessage=null
    if (this.form.valid) {



        this.telegramService.sendMessage(
          this.caht_id[0],
          this.form.get('text')?.value,
          this.convertlistToTelegramFormat(this.items.value)
          ).subscribe(data=>{
                //   console.log('data   '+data);
                   
        })
this.telegramService.sendPhoto(
          this.caht_id[0],
          this.form.get('photo')?.value,
          this.form.get('caption')?.value
        ).subscribe(data=>{
        })

      }
      else{
       this.errorMessage="text is empty"

      }
  }
  // [
  //   [{"text":"asdasd",calback_data:"sdfsdf"},{"text":"asdasd",calback_data:"sdfsdf"}]
  // ]
  // [
  //   {
  //     "name": "دکمه 1"
  //   },
  //   {
  //     "name": "دکمه 2"
  //   },
  //   {
  //     "name": "دکمه 3"
  //   }
  // ]
  // name="1"
  // text=`hgdfj${this.name}hgdgh`
  // sendMessage(text: string) {
  //   this.caht_id.forEach((element) => {
  //     this.http
  //       .get(

  //       )
  //       .subscribe((data) => {});
  //   });
  // }
}
