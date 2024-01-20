import { Routes } from '@angular/router';
import { InputbyuserComponent } from './inputbyuser/inputbyuser.component';
import { EditpageComponent } from './editpage/editpage.component';


export const routes: Routes = [
    {
        path: "",
        component:InputbyuserComponent
      },
      {
        path: "edit",
        component:EditpageComponent     
      },

      {
        path: "change",
        component:InputbyuserComponent     
      },
     
];
