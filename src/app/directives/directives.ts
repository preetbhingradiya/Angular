import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';


@Directive({
  selector: '[setDirective]',
  standalone: true,
})

export class Directives implements OnInit {
  private element: ElementRef;

  constructor(val: ElementRef,private render:Renderer2  /* render2 is provide some style,class etc features*/) {
    this.element=val //refrence to tag in store val use in the life-hook p tag as aattribut
  }
  ngOnInit(): void {
      // this.element.nativeElement.style.color = 'red'
      this.render.setStyle(this.element.nativeElement,"color","red")
      // this.render.addClass(this.element.nativeElement,"wrapper")  //add to the wrapper class in the p tag
  }
}
