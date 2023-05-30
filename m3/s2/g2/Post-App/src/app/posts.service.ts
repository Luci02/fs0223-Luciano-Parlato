import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  apiUrl: string = '../assets/db.json';

  constructor() {
  }

  getAllPosts(): Promise<any> {
    return fetch(this.apiUrl).then(res => res.json()).catch( err => console.log(err) );
  }

}
