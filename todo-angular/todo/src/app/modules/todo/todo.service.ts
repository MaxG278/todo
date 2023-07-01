import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Todo {
  id: number;
  title: string;
  todotask: string;
  check: boolean;
  category?: string;
  priority?: number;
}

@Injectable({
  providedIn: 'root',
})

// CRUD = Create, Read, Update, Delete
// Read = getTodoList, getTodo
export class TodoService {
  count: number = 3;
  // vom backend später implementieren/einfügen und
  // dann nicht hard coden sondern mit .length erstellen

  private todoList = new BehaviorSubject<Todo[]>([
    {
      id: 1,
      title: 'first-Todo',
      todotask: 'gsosdobdgsodgsnogdsdgoigsdohdggdodgobgdbogdyoidgdgoibxkngd',
      check: false,
    },
    {
      id: 2,
      title: '2nd-Todo',
      todotask: 'gsosdobdgsodgsnogdsdgoigsdohdggdodgobgdbogdyoidgdgoibxkngd',
      check: false,
    },
  ]);

  getTodoList() {
    return this.todoList.asObservable();
    // "gib mir alle todos (read von CRUD)"
  }
  getTodo(id: number) {
    return this.todoList.value.find((todo) => todo.id === id);
    // die methode returned das erste result von der todolist
    // find methode gibt ersten treffer zurück, hier , da "id" gibt es nur einen treffer
    // (find gibt immer nur einen treffer zurück.)
    // filter methode würde alle treffer zurück geben, wäre dann bei title/category/check sinnvoll
    // , weil multiple treffer möglich.
  }
  addTodo(title: string, todotask: string) {
    const newTodo: Todo = {
      title: title,
      todotask: todotask,
      id: this.count++,
      check: false,
    };
    this.todoList.value.push(newTodo);
  }
  constructor() {}
}
