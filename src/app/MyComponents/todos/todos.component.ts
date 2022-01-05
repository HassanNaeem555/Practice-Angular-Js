import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  localItem: any;
  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
    // this.todos = [
    //   {
    //     sno: 1,
    //     title: 'This is title 1',
    //     description: 'Description',
    //     active: true
    //   },
    //   {
    //     sno: 2,
    //     title: 'This is title 2',
    //     description: 'Description',
    //     active: true
    //   },
    //   {
    //     sno: 3,
    //     title: 'This is title 3',
    //     description: 'Description',
    //     active: true
    //   }
    // ]
  }

  ngOnInit(): void {
  }
  deleteTodo = (todo: Todo) => {
    const getIndex = this.todos.indexOf(todo);
    this.todos.splice(getIndex, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
    console.log('todo get for deletion', todo, 'getIndex::::', getIndex);
  }
  addTodos = (todo: Todo) => {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
