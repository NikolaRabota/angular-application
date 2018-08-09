import { Component, OnInit } from '@angular/core';
import {Post} from "../../../post";
import {PostService} from "../../services/post.service";
import { UserService } from "../../services/user.service";
import { User } from "../../../user";
import {Observable} from "rxjs";
import { Comment } from "../../../comment";
import { CommentService } from "../../services/comment.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>;
  users$: Observable<User[]>;
  comments$: Observable<Comment[]>;
  selectedPost: Post;
  selectedUser: User;
  commentsOnPost = [];
  latestComments: Comment[];

  constructor(private postService: PostService,private userService: UserService, private commentService: CommentService) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers();
    this.comments$ = this.commentService.getComments();
    this.posts$ = this.postService.getPosts();
    this.comments$.subscribe( comments => {
      this.latestComments = [];
      for (const comment of comments.slice().reverse()) {
      // @ts-ignore
        if (comment.id >= comments.length - 4) {
          // @ts-ignore
          this.latestComments.push({comment})
        }}
  })}

  onSelect(post: Post, user: User): void {
    this.selectedPost = post;
    this.selectedUser = user;
    this.comments$.subscribe(comments => {
      this.commentsOnPost = [];
      for (const comment of comments) {
        // @ts-ignore
        if (comment.postId == post.id)
          this.commentsOnPost.push({comment})}});
  }
}
