import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [CommonModule, NewTaskComponent, ShowTaskComponent],
  templateUrl: './subject.component.html',
})
export class SubjectComponent implements OnInit {
  ngOnInit(): void {
     let obj=new BehaviorSubject<number>(100)

     obj.subscribe((res)=>console.log("Subscribe 1",res))
     obj.subscribe((res)=>console.log("Subscribe 2",res))

     obj.next(200) //change the value of after 3 subscribe

     obj.subscribe((res)=>console.log("Subscribe 3",res))   //100 value not print because the privous value is not subscribe in subject



    //replay subject
    // let obj = new ReplaySubject(1)
    //on 1 in 100 value is buffer and not subscrine 3 becuse after the value is change 200 so that
    // obj.next(100)

    // obj.subscribe((res) => console.log("Subscribe 1", res))
    // obj.subscribe((res) => console.log("Subscribe 2", res))

    // obj.next(200) //change the value of after 3 subscribe

    // obj.subscribe((res) => console.log("Subscribe 3", res))   //200 value is print because the privous value is store in buffer of replay-subject

  }
}
