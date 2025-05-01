import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-wrapper',
  standalone: true,
  imports: [FormsModule , TodoFormComponent, TodoListComponent],
  templateUrl: './todo-wrapper.component.html',
  styleUrl: './todo-wrapper.component.css'
})
export class TodoWrapperComponent {
  todos: { text: string; completed: boolean }[] = [];

  addTodo(todo: string) {
    if (todo.trim()) {
      this.todos.push({ text: todo, completed: false });
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  toggleComplete(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
