import { Component } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent {

  postArray: Post[] = [];

  constructor(private postSvc: PostService){
    this.postSvc.getPosts().then( post => {
      this.postArray = post.filter( p => !p.active )
    }
  )}

}
