import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { IUser } from '../auth/interfaces/I-user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  usersArray: IUser[] = [];

  constructor(
    private userSvc: UserService
  ){}

  ngOnInit(){
    this.userSvc.get().subscribe(current => this.usersArray = current )
  }

  OnDelete(item: IUser){
    this.userSvc.delete(item.id).subscribe(
      () => {
        alert('Elemento eliminato con successo.');
      },
      error => {
        console.error('Si è verificato un errore durante l\'eliminazione:', error);
      }
    );
  }

  OnChange(email: string): void {
    const newEmail = prompt('Enter the new email:');
    if (newEmail) {
      const userToUpdate = this.usersArray.find(u => u.email === email);
      if (userToUpdate) {
        userToUpdate.email = newEmail;
        this.userSvc.put(userToUpdate).subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }


}
