import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    TodoListComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }
