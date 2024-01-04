import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable.component.html',
})
export class ObservableComponent {
  data: any[] = [];

  myObservable = new Observable((observer) => {
    // observer.next([1,2,3,4,5])
    setTimeout(() => { observer.next(1) }, 1000) //observer can also emit or next multiple values
    setTimeout(() => { observer.next(2) }, 2000)
    setTimeout(() => { observer.next(3) }, 3000)
    // setTimeout(() => { observer.error("Somethign want wrong") }, 3000)
    setTimeout(() => { observer.next(4) }, 4000)
    setTimeout(() => { observer.next(5) }, 5000)
    setTimeout(() => { observer.complete() }, 6000)
  })

  getAsyncData() {
    //next error complete
    // the only subscrib the myobservable that can next(emit,find) the data
    this.myObservable.subscribe((val: any) => {
      this.data.push(val)
    },
      (error) => {
        alert(error)
      },
      () => {
        alert("All data arr emited")
      }
    )
  }
}
