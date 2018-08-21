import { Component, OnInit } from '@angular/core';
import { Post } from "../../../../post";
import {Observable} from "rxjs";
import { PostService } from "../../../services/post.service";

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {
  posts$: Observable<Post[]>;
  latestPosts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
    this.posts$.subscribe( posts => {
      this.latestPosts = [];
      for (const post of posts.slice().reverse()){
        // @ts-ignore
        if (post.id >= posts.length - 4) {
          // @ts-ignore
          this.latestPosts.push({post})
        }
      }
    })
  }

}
