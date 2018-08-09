import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentsComponent} from "../../comments/comments.component";

const commentRoute: Routes = [
  {path: 'comments', component: CommentsComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(commentRoute)
  ],
  declarations: []
})
export class ThePostRoutingModule { }
