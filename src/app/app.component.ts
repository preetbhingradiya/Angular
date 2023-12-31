import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NotificationComponent,HeaderComponent,TodoListComponent,TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular';
  fullName:string=''
  @ViewChildren('inputEl') inputBox:QueryList<ElementRef> 

  show(){
    let name=''
    this.inputBox.forEach((ele)=>{
      name += ele.nativeElement.value + ' '
    })
    this.fullName=name
  }
}
