import { Injectable } from '@angular/core';
import { Todo } from '../Model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  
  lastId: number = 0;

  // Placeholder for todo's
  todos: Todo[] = [];
 
  constructor() {
  }

  // Simulate POST /todos
  addTodo(todo: Todo): TodoServiceService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoServiceService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null as any;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number) {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  
  }
}

  
