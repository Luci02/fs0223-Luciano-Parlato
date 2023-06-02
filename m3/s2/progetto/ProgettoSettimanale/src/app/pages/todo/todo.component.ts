import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ITodo } from 'src/app/Models/Itodo';
import { Todo } from 'src/app/Models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  newToDo: Todo = new Todo('',false);
  toDoList: ITodo[] = [];
  loading:boolean = true;

  constructor(private ToDoSvc: TodosService){}

  ngOnInit(): void {
    this.getToDoList();
  }

  getToDoList(): void {
    this.ToDoSvc.getToDoList().then( response => {
      this.toDoList = response;
      this.loading = false;
      this.toDoList = response.filter( element => element.completed === false );
    } )
  }

  createNewToDo(): void{
    if(this.newToDo.title != ''){
      this.ToDoSvc.addNewToDo(this.newToDo).then( () => this.getToDoList());
      this.newToDo.title = "";
    }else{
      this.newToDo.title = 'Inserisci un testo'
      setTimeout(() => {
        this.newToDo.title = '';
      }, 1000);
    }
  }

  completeTask(todo: ITodo): void{
    this.ToDoSvc.ToDoCompleted(todo).then( res => {
      this.getToDoList();
    });
  }
}
