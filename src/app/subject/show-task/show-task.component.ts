import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-show-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-task.component.html',
})
export class ShowTaskComponent implements OnInit {
  task: string[] = []

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.createTask.subscribe((value: string) => {
      this.task.push(value);
    });
  }

}
