import { Component, ElementRef, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
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
import { HttpCrudComponent } from './http-crud/http-crud.component';
import { ArrayFormComponent } from './array-form/array-form.component';
import { CdkDropList, CdkDrag, moveItemInArray, CdkDragPreview } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NotificationComponent, HeaderComponent, TodoListComponent, TestComponent, LifeHooksComponent, DisplayComponent, ObservableComponent, SubjectComponent, FormComponent, ReactiveFromComponent, CustomPipe, HttpCrudComponent, ArrayFormComponent, CdkDropList, CdkDrag,CdkDragPreview],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 100;
  destroy: boolean = true
  fullName: string = ''
  message: string = '';
  @ViewChildren('inputEl') inputBox: QueryList<ElementRef>

  movies = [
    { title: 'Episode I - The Phantom Menace', poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg' },
    { title: 'Episode II - Attack of the Clones'},
    { title: 'Episode III - Revenge of the Sith' },
  ];

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

  destroyComponent() {
    this.destroy = !this.destroy
  }

  drop(data: any) {
    moveItemInArray(this.movies, data.previousIndex, data.currentIndex);
  }
}
