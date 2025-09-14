import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksServices } from '../tasks.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule,CommonModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  constructor(private tasksService:TasksServices) {}
OnCancel() {
  this.close.emit();
}
onSubmit(){
  this.tasksService.addTask({
    title: this.enteredTitle,
    summary: this.enteredSummary,
    dueDate: this.enteredDueDate
},this.userId);
this.close.emit();
}
}
