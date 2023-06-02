import { ApplicationInitStatus, Injectable } from '@angular/core';
import { ITodo } from '../Models/Itodo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiUrl: string = 'http://localhost:3000/todos'

  constructor() { }

  getToDoList(): Promise<ITodo[]>{
    return fetch(this.apiUrl).then(response => response.json());
  }

  ToDoCompleted(todo: ITodo): Promise<Response>{
    todo.completed = true;
    return fetch(this.apiUrl+'/'+todo.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    })
  }

  addNewToDo(todo: ITodo) {
    return fetch(this.apiUrl,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    }).then( res => res.json());
}

}
