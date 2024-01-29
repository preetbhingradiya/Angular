import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  @ContentChild('para') paragrahEl:ElementRef
  //use to contentChilde access to the ng-content tag refrence value (ONLY ON TAG)


  @ContentChildren('para') paragrah:QueryList<ElementRef>
  //use to contentChildren access to the ng-content tag refrence value (MULTIPAL ON TAG)

  childe(){
    // console.log(this.paragrahEl.nativeElement)
    this.paragrah.forEach((ele)=>console.log(ele.nativeElement))
  }
}
