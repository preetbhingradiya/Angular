import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-hooks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './life-hooks.component.html',
  styleUrl: './life-hooks.component.scss'
})
export class LifeHooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit {

  @ContentChild('para') paraEl:ElementRef
  @Input() message: string;
  //use the constructor and pass Input property in parent comaponent can not be change

  constructor() {
    console.log("Hook Componnet can run")
    // console.log(this.message)  //undifine the value because message is undefine
  }

  ngOnChanges(change: SimpleChanges) {
    console.log("ngOnChanges Hook can run")  //if the property of input can chage this can ru n
    // console.log(this.message)   //not undifine but emty string beacuse app.com.ts message is string it means it change all time componet can hite the click event
    // console.log(change)
  }

  ngOnInit(): void {
    console.log("ngOnInit Hook can run")  //run only one time after change the inpute property
  }

  ngDoCheck(): void {
    console.log("ngDoCheck Hook can run")  //input property change or not change not mettaer if every change DITECTIVE run this run ex= only click event call
    // console.log("DoCheck",this.paraEl)  this value is undife becouse p tag not initialized that hooks call or othe any
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Hook can run")
    console.log("AfterContentChildInit",this.paraEl.nativeElement)  // this value is p tag becuse this hooks can run value finde
  }
}
