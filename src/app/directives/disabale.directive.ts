import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisabale]',
  standalone: true
})
export class DisabaleDirective {
  constructor(private ele:ElementRef,private render:Renderer2) { }

  @Input() set condition(val:boolean) {
   if(val){
     this.render.addClass(this.ele.nativeElement,'wrapper')
   }
  } 
}
