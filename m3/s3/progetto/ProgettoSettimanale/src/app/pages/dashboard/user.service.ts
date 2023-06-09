import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../auth/interfaces/I-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = 'http://localhost:3000/users';

  constructor(
    private http:HttpClient
  ) { }

  get(){
    return this.http.get<IUser[]>(this.apiUrl);
  }

  post(user:IUser){
    return this.http.post<IUser>(this.apiUrl,user);
  }

  put(user:IUser){

    return this.http.put<IUser>(this.apiUrl + '/' + user.id, user);
  }

  delete(id:number){
    return this.http.delete(this.apiUrl + '/' + id);
  }

}
