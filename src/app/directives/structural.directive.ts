import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructural]',
  standalone: true
})
export class StructuralDirective {

  constructor(private view: TemplateRef<any>, private template: ViewContainerRef) { }
  @Input() set appStructural(condition: boolean) {
    if (condition) {
      this.template.createEmbeddedView(this.view)
    } else {
      this.template.clear()
    }
  }
}
