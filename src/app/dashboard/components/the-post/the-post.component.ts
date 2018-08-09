import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../post";
import {User} from "../../../user";
import {Comment} from "../../../comment";


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-the-post',
  templateUrl: './the-post.component.html',
  styleUrls: ['./the-post.component.css']
})
export class PostDetailComponent implements OnInit {

  @Input() post: Post;
  @Input() user: User;
  @Input() comments: Comment[];

  constructor() { }
  ngOnInit() {
  }
}
