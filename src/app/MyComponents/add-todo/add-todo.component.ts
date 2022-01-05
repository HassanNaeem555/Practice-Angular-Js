import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  "title": string;
  "description": string;
  @Output() onSave: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit = () => {
    const todo = {
      "sno": parseInt(String(Math.random() * 5)),
      "title": this.title,
      "description": this.description,
      "active": true
    };
    console.log('todo added', todo);
    this.onSave.emit(todo);
  }
}
