import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-task.component.html',
})
export class NewTaskComponent {
  task: string = ''

  constructor(private taskService: TaskService) {}
  OnTaskClick() {
    this.taskService.createTask.next(this.task);
  }
}
