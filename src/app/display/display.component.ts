import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StructuralDirective } from '../directives/structural.directive';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule,StructuralDirective],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss'
})
export class DisplayComponent {

  display:boolean=false;

  diplatText(){
    this.display=!this.display;
  }
}
