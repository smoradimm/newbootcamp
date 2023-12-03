import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { BodyComponent } from './body/body.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductindetailComponent } from './productindetail/productindetail.component';

export const routes: Routes = [
  {
    path: 'home',
    component: BodyComponent,
    // children:[
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.component').then((m) => m.RegisterComponent),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile.component').then((m) => m.ProfileComponent),
  },

  {
    path: 'product',
    loadComponent: () =>
      import('./product/product.component').then((m) => m.ProductComponent),
   // component: ProductComponent,
  },
  {
    path: 'productindetail',
    loadComponent: () =>
      import('./productindetail/productindetail.component').then((m) => m.ProductindetailComponent),
   // component: ProductindetailComponent,
  },
];
