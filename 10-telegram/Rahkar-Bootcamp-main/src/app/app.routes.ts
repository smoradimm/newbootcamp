import { Routes } from "@angular/router";
import { NotFound } from "./not-found.component";
import { RootComponent } from "./root.component";

import { TelegramComponent } from "./telegram/telegram.component";


export const routes: Routes = [
  {
    path: "",
    component: RootComponent
  },
  {
    path: "telegram",
    component: TelegramComponent
  },

   
  {
    path: "**",
    component: NotFound,
  }
];
