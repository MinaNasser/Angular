import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule ,CommonModule],
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todos: { text: string; completed: boolean }[] = [];
  @Output() deleteTodoEvent = new EventEmitter<number>();
  @Output() toggleTodoEvent = new EventEmitter<number>();

  deleteTodo(index: number) {
    this.deleteTodoEvent.emit(index);
  }
  toggleTodo(index: number) {
    this.toggleTodoEvent.emit(index);
  }
}
