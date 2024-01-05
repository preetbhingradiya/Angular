import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, from, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable.component.html',
})
export class ObservableComponent {
  // @ViewChild('clickBtn') btn: ElementRef
  btnObs;
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

  myobs = from([1, 2, 3, 4, 5])
  transform = this.myobs.pipe(map((val: any) => {
    return val * 5
  }))

  getAsyncData() {
    //next error complete
    // the only subscrib the myobservable that can next(emit,find) the data
    // this.myObservable.subscribe((val: any) => {
    //   this.data.push(val)
    // },
    //   (error) => {
    //     alert(error)
    //   },
    //   () => {
    //     alert("All data arr emited")
    //   }
    // )
    this.transform.subscribe({
      next: (val: any) => {
        this.data.push(val)
      },
      error: (error) => {
        alert(error)
      },
      complete: () => {
        alert("All data arr emited")
      }
    })
  }

  // showItem(){
  //   let div=document.createElement('div')
  //   div.innerHTML="Item"
  //   document.getElementById('wrapper').appendChild(div)
  // }

  // ngAfterViewChecked(): void {
  //   //1seclect the tag       2event name
  //   this.btnObs = fromEvent(this.btn.nativeElement, 'click')
  //   .subscribe((data) =>{
  //      console.log(data)
  //     this.showItem()
  //   });
  // }
}
