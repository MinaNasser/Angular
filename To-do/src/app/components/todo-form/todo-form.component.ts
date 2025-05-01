import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  newTodo: string = '';
  @Output() newTodoEvent = new EventEmitter<string>();

  addTodo() {
    if (this.newTodo.trim()) {
      this.newTodoEvent.emit(this.newTodo.trim());
      this.newTodo = '';
    }
  }
}
