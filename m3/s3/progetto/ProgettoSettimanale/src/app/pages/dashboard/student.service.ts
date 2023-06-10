import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Istudent } from './interfaces/istudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiUrl: string = environment.apiUrl;

  constructor(
    private http:HttpClient
  ) { }

  get(){
    return this.http.get<Istudent[]>(this.apiUrl+'/students');
  }

  getSingleStudent(id: number){
    return this.http.get<Istudent>(this.apiUrl+'/students/'+ id);
  }

  post(student:Istudent){
    return this.http.post<Istudent>(this.apiUrl+'/students',student);
  }

  put(user:Istudent){
    return this.http.put<Istudent>(this.apiUrl + '/students/' + user.id, user);
  }

  delete(id:number){
    return this.http.delete(this.apiUrl + '/students/' + id);
  }

}
