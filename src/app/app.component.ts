import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TestComponent } from './test/test.component';
import { LifeHooksComponent } from './life-hooks/life-hooks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NotificationComponent,HeaderComponent,TodoListComponent,TestComponent,LifeHooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular';
  fullName:string=''
  message:string='';
  @ViewChildren('inputEl') inputBox:QueryList<ElementRef>

  show(){
    let name=''
    this.inputBox.forEach((ele)=>{
      name += ele.nativeElement.value + ' '
    })
    this.fullName=name
  }

  // @ViewChild('inputBox') message:ElementRef;   seconde method use
  Onclick(val:HTMLInputElement){
    this.message=val.value
  }
}
