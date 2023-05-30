import { Component } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent {

  postArray: Post[] = [];

  constructor(private postSvc: PostService){
    this.postSvc.getPosts().then( post => {
      this.postArray = post.filter( p => p.active )
    }
  )}
}
