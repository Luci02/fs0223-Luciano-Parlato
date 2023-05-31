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
    this.postArray = this.postSvc.getPosts(false)
  }

  coloraCard( type: string ): string{

    switch (true) {
      case type === "news":
        return 'bg-primary';
      case type === "politics":
        return 'bg-black';
      case type === "education":
        return 'bg-danger';
      default:
        return 'bg-warning';
    }

  }

}
