import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Comment} from '../../../comment'
import {CommentService} from '../../services/comment.service'
import {Observable} from "rxjs";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments$: Observable<Comment[]>;

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.getComments();
  }

  getComments(): void {

    this.comments$ = this.commentService.getComments();
  }
}
