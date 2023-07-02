import { Component } from '@angular/core';
import { TodoService, Todo } from '../../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todoList: Todo[] = [];

  //selectedTodo: Todo | undefined | null = null;
  selectedTodo: Todo | undefined = {
    title: '',
    todotask: '',
    id: 3,
    check: false,
  };

  constructor(private todoService: TodoService) {
    this.todoService.getTodoList().subscribe((todos) => {
      console.log('dgdf', todos);
      this.todoList = todos;
    });
  }

  onEditTodo(id: number) {
    this.selectedTodo = this.todoList.find((todo) => todo.id === id);
  }
  toggleCheck(id: number) {
    this.todoService.toggleCheck(id);
  }
  onSubmit() {
    if (this.selectedTodo) {
      this.todoService.updateTodo(
        this.selectedTodo.id,
        this.selectedTodo.title,
        this.selectedTodo.todotask,
        this.selectedTodo.check
      );
      this.selectedTodo = undefined;
    }
  }
  onDeleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }
}
