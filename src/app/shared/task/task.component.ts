import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/core/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent{

  @Input('task') task!: Task;
  @Output('deleteEvent') deleteEvent= new EventEmitter<number>();

  deleteTask() {
    this.deleteEvent.emit(this.task.id);
  }

}
