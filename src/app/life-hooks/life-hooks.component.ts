import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-life-hooks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './life-hooks.component.html',
  styleUrl: './life-hooks.component.scss'
})
export class LifeHooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @ViewChild('value ') afterview: ElementRef
  @ContentChild('para') paraEl: ElementRef
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
    console.log("ngOnInit Hook can run")  //run only one time after run the component
  }

  ngDoCheck(): void {
    console.log("ngDoCheck Hook can run")  //input property change or not change not mettaer if every change DITECTIVE run this run ex= only click event call
    //  console.log("DoCheck",this.paraEl)    //this value is undife becouse p tag not initialized that hooks call or othe any
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Hook can run")  //if the project content value is initialized that run, when the value is change that call not run
    // console.log("AfterContentChildInit", this.paraEl.nativeElement)  // this value is p tag becuse this hooks can run value finde
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked Hook can run")  //if the project content value is change or chage ditective that can also run
    // console.log(this.afterview)  //undefined value bacause this use content tage child or children
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Hook can run")  //the view template tag is initialized use of viewchilde or vew children that time run
    //if the value can chage of tage that time it can not run
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked Hook can run")  //the view template tag proparty can change or not but change DITECTIVE run this
    console.log(this.afterview.nativeElement.textContent)     //but it is Hook only component not allow all directive
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy Hook can run")  //if the any text/value can be deletedor remove that time run
  }
}
