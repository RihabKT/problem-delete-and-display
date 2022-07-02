import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../Model/todo';


@Component({
  selector: 'app-todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.css']
})
export class TodolistItemComponent  {
  @Input()
   todo:Todo = new Todo()

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }
  ngOnInit(): void {
  }
  

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }



}
