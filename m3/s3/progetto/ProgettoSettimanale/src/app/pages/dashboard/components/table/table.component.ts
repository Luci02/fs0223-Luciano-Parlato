import { Component } from '@angular/core';
import { StudentService } from '../../student.service';
import { Istudent } from '../../interfaces/istudent';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  studentsArray: Istudent[] = [];

  constructor(
    private studentSvc: StudentService
  ){}

  ngOnInit(){
    this.studentSvc.get().subscribe({

      next: (res) => {
        this.studentsArray = res;
      },

      error: (err) => {
        console.error(err);
      }
    })
  }

  OnDelete(item: Istudent){
    this.studentSvc.delete(item.id).subscribe({
      complete: () => {
        alert('Elemento eliminato con successo.');
        this.studentSvc.get().subscribe(current => this.studentsArray = current )
      },
      error: (error) => {
        console.error('Si è verificato un errore durante l\'eliminazione:', error);
      }
    })
  }

}
