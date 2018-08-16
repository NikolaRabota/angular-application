import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Post} from "../../../post";
import {PostService} from "../../services/post.service";
import { UserService } from "../../services/user.service";
import { User } from "../../../user";
import {Observable} from "rxjs";
import { CommentService } from "../../services/comment.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>;
  users$: Observable<User[]>;
  page: number;
  @Input() forUserProfile: number;

  constructor(private postService: PostService, private userService: UserService, private commentService: CommentService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.users$ = this.userService.getUsers();
    this.posts$ = this.postService.getPosts();
    this.page = +this.route.snapshot.paramMap.get('page');
  }
}
