import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Comment} from "../../../../comment";
import {CommentService} from "../../../services/comment.service";

@Component({
  selector: 'app-latestcomments',
  templateUrl: './latestcomments.component.html',
  styleUrls: ['./latestcomments.component.css']
})
export class LatestCommentsComponent implements OnInit {
  comments$: Observable<Comment[]>;
  latestComments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.comments$ = this.commentService.getComments();
    this.comments$.subscribe(comments => {
      this.latestComments = [];
      for (const comment of comments.slice().reverse()) {
        // @ts-ignore
        if (comment.id >= comments.length - 4) {
          // @ts-ignore
          this.latestComments.push({comment})
        }
      }
    })
  }

}
