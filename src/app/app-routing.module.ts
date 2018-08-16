import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent }      from './dashboard/components/users/users.component';
import { UserDetailComponent }  from './dashboard/components/user-detail/user-detail.component';
import {PostDetailComponent} from "./dashboard/components/the-post/the-post.component";
import { PostsComponent} from "./dashboard/components/posts/posts.component";
import {CommentsComponent} from "./dashboard/components/comments/comments.component";

const routes: Routes = [
  { path: '', redirectTo: '/posts/1', pathMatch: 'full' },
  { path: 'posts/:page', component: PostsComponent},
  { path: 'posts/post/:id', component: PostDetailComponent},
  { path: 'users/user/:id', component: UserDetailComponent },
  { path: 'users', component: UsersComponent },
  { path: 'comments', component: CommentsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
