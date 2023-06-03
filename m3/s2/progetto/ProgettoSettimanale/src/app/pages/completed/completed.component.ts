import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/Models/Itodo';
import { Todo } from 'src/app/Models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  newToDo: Todo = new Todo('',false);
  toDoList: ITodo[] = [];
  loading:boolean = true;

  constructor(private completedTodoSvc: TodosService){}

  ngOnInit(): void {
    this.getCompletedTasks();
  }

  getCompletedTasks(){
    this.completedTodoSvc.getToDoList().then( response => {
      this.loading = false;
      this.toDoList = response.filter( element => element.completed === true );
    } )
  }

  add(): void{
    if(this.newToDo.title != ''){
      this.completedTodoSvc.addNewToDo(this.newToDo).then( () => this.getCompletedTasks());
      this.newToDo.title = "";
    }else{
      this.newToDo.title = 'Inserisci un testo'
      setTimeout(() => {
        this.newToDo.title = '';
      }, 1000);
    }
  }

  delete(task: ITodo): void{
    this.completedTodoSvc.deleteToDo(task).then( () => { this.getCompletedTasks() });
  }

}
