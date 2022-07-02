import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../Model/todo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
newTodo: Todo = new Todo()
@Output()
add:EventEmitter<Todo> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
this.add.emit(this.newTodo)
this.newTodo = new Todo()
console.log(this.newTodo)
  }
}
