import { ApplicationInitStatus, Injectable } from '@angular/core';
import { ITodo } from '../Models/Itodo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiUrl: string = 'http://localhost:3000/todos';

  constructor() { }

  getToDoList(): Promise<ITodo[]>{
    return fetch(this.apiUrl).then(response => response.json());
  }

  getSingleToDo(id: number): Promise<ITodo>{
    return fetch(this.apiUrl+'/'+id).then(response => response.json());
  }

  updateToDo(todo: ITodo): Promise<Response>{
    return fetch(this.apiUrl+'/'+todo.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    })
  }

  addNewToDo(todo: ITodo): Promise<ITodo> {
    return fetch(this.apiUrl,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    }).then( res => res.json() );
}

  deleteToDo(task: ITodo){
    return fetch(this.apiUrl+'/'+task.id, {
      method: 'DELETE'
    }).then( res => res.json() );
  }

}
