import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule,MatButtonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  texts:any[]=[];
  getData(text:any){
    this.texts.push({id:this.texts.length,name:text})
  }
  removeData(id:number){
    this.texts=this.texts.filter(item=>item.id!==id)
  }
}
