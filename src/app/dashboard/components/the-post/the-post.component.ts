import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Post} from "../../../post";
import {User} from "../../../user";
import {Comment} from "../../../comment";
import {Observable} from "rxjs";
import {PostService} from "../../services/post.service";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {CommentService} from "../../services/comment.service";


@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-the-post',
  templateUrl: './the-post.component.html',
  styleUrls: ['./the-post.component.css']
})
export class PostDetailComponent implements OnInit {

  public post$: Post;
  public comments$: Observable<Comment[]>;
  public user: User;
  commentsOnPost: Comment[];

  constructor(private postService: PostService, private route: ActivatedRoute, private userService: UserService, private commentService: CommentService) { }
  ngOnInit() {
    this.getPost();
  }

  getPost(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPostFromService(id).subscribe( post =>{
        this.post$ = post;
        this.getUser();
        });
    };
  getUser(): void{
    // @ts-ignore
    this.userService.getUser(this.post$.id).subscribe( user => {
      this.user = user;
      this.getCommentsOnPost()
    })
  }
  getCommentsOnPost(): void{
    this.comments$ = this.commentService.getComments();
    this.comments$.subscribe(comments => {
      this.commentsOnPost = [];
      for (const comment of comments) {
        // @ts-ignore
        if (comment.postId == this.post$.id)
          this.commentsOnPost.push(comment)}});
  }
}
