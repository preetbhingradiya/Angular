import { Component, Input,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-hooks',
  standalone: true,
  imports: [],
  templateUrl: './life-hooks.component.html',
  styleUrl: './life-hooks.component.scss'
})
export class LifeHooksComponent implements OnChanges {

  @Input() message:string;
  //use the constructor and pass Input property in parent comaponent can not be change

  constructor(){
    console.log("Hook Componnet can run")
    // console.log(this.message)  //undifine the value because message is undefine
  }

  ngOnChanges(change:SimpleChanges){
    console.log(this.message)   //not undifine but emty string beacuse app.com.ts message is string it means it change all time componet can hite the click event
    console.log(change)
  }
}
