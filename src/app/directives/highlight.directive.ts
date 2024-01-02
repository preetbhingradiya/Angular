import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private element:ElementRef,private render:Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.render.setStyle(this.element.nativeElement,"transform",'scaleY(1.5)')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.render.setStyle(this.element.nativeElement,"transform",'scaleY(1)')
  }

}
