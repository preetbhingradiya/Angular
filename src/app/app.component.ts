import { Component, ElementRef, QueryList,  ViewChildren, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TestComponent } from './test/test.component';
import { LifeHooksComponent } from './life-hooks/life-hooks.component';
import { DisplayComponent } from './display/display.component';
import { ObservableComponent } from './observable/observable.component';
import { SubjectComponent } from './subject/subject.component';
import { FormComponent } from './form/form.component';
import { ReactiveFromComponent } from './reactive-from/reactive-from.component';
import { CustomPipe } from './custom.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HttpCrudComponent } from './http-crud/http-crud.component';
import { ArrayFormComponent } from './array-form/array-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NotificationComponent, HeaderComponent, TodoListComponent, TestComponent, LifeHooksComponent,DisplayComponent,ObservableComponent,SubjectComponent,FormComponent,ReactiveFromComponent,CustomPipe,HttpCrudComponent,ArrayFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 100;
  destroy:boolean=true
  fullName: string = ''
  message: string = '';
  @ViewChildren('inputEl') inputBox: QueryList<ElementRef>

  show() {
    let name = ''
    this.inputBox.forEach((ele) => {
      name += ele.nativeElement.value + ' '
    })
    this.fullName = name
  }

  // @ViewChild('inputBox') message:ElementRef;   seconde method use
  Onclick(val: HTMLInputElement) {
    this.message = val.value
  }

  destroyComponent(){
    this.destroy=!this.destroy
  }
}
