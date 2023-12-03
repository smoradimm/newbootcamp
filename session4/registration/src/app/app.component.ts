import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormforinputComponent } from './formforinput/formforinput.component';
import { DetailesComponent } from "./detailes/detailes.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, FormforinputComponent, DetailesComponent]
})
export class AppComponent {
  title = 'registration';
}
