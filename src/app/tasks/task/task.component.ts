import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { CommonModule, DatePipe } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";
import { TasksServices } from '../tasks.service';


@Component({
  selector: 'app-task',
  imports: [CommonModule, CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!: Task;
 

  constructor(private tasksService:TasksServices) {}

  ngOnChanges() {
  console.log('Task input:', this.task);
}
  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
