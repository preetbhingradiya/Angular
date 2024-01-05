import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  // createTask:EventEmitter<string> = new EventEmitter<string>();
  // createTask = new Subject<string>()  // seconde method use is also called eventemitter   not initialization to valur in subject
  createTask=new BehaviorSubject<string>("")  //initialization value is provide
}
