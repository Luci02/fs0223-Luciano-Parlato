import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITodo } from 'src/app/Models/Itodo';
import { Todo } from 'src/app/Models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  loading:boolean = true;
  editedToDo: ITodo = new Todo('',false);

  constructor(
    private taskSvc: TodosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe( (params: any) => {
      this.taskSvc.getSingleToDo(params.id)
      .then( res => {
        this.editedToDo = res;
        this.loading = false;
      })
    })
  }

  edit(): void{
    this.taskSvc.updateToDo(this.editedToDo)
    this.router.navigate(['/home']);
  }

}
