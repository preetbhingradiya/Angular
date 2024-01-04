import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [CommonModule,NewTaskComponent,ShowTaskComponent],
  templateUrl: './subject.component.html',
})
export class SubjectComponent {

}
