import { Injectable } from '@angular/core';
import { Post } from './Models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postArray: Post[] = [
    {
      "id": 1,
      "title": "Titolo Post 1",
      "body": "Lorem ipsum dolor sit amet, consectetur adip",
      "active": true,
      "type": "news"
    },
    {
      "id": 2,
      "title": "Titolo Post 2",
      "body": "Lorem ipsum dolor sit amet, consectetur adip",
      "active": true,
      "type": "politic"
    },
    {
      "id": 3,
      "title": "Titolo Post 3",
      "body": "Lorem ipsum dolor sit amet, consectetur adip",
      "active": true,
      "type": "education"
    },
    {
      "id": 4,
      "title": "Titolo Post 4",
      "body": "Lorem ipsum dolor sit amet, consectetur adip",
      "active": false,
      "type": "news"
    },
    {
      "id": 5,
      "title": "Titolo Post 5",
      "body": "Lorem ipsum dolor sit amet, consectetur adip",
      "active": false,
      "type": "politic"
    }
  ]

  constructor() { }

  getPosts(activeInactive:boolean): Post[] {

    if(activeInactive){
      return this.postArray.filter( (p: Post) => p.active );
    }else{
      return this.postArray.filter( (p: Post) => !p.active );
    }
  }

}
