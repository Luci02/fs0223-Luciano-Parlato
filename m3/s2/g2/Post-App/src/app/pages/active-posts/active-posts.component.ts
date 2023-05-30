import { Component } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent {

  postsArray: Post[] = [];

  constructor(private postsService: PostsService){

    postsService.getAllPosts()
    .then(postList => {

      console.log(postList);

      for ( let currentpost of postList.posts){
        console.log(currentpost);
      }

      this.postsArray.push(postList.posts);

    } );

    console.log(this.postsArray);

  }

}
