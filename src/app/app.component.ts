import { Component } from '@angular/core';

import { TodoServiceService } from './service/todo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoServiceService]
})
export class AppComponent {
  // newTodo: Todo = new Todo()
  constructor(private todoService: TodoServiceService){}

  onAddTodo(todo:any) {
    this.todoService.addTodo(todo);
  }

  onRemoveTodo(todo:any) {
    this.todoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoService.getAllTodos();
  }


  }

  





