import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { StructuralDirective } from '../directives/structural.directive';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule,StructuralDirective],
  templateUrl: './display.component.html',
})
export class DisplayComponent {


  display:boolean=false;
  pluse:string='+'
  mines:string='-'
  @ViewChild("para") element:ElementRef;

  diplatText(){
    this.display=!this.display;
  }
}
