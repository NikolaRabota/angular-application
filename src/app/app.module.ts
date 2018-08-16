import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './dashboard/components/users/users.component';
import { FormsModule } from "@angular/forms";
import { UserDetailComponent } from './dashboard/components/user-detail/user-detail.component';
import { PostsComponent } from './dashboard/components/posts/posts.component';
import { AppRoutingModule } from './app-routing.module';
import { PostDetailComponent } from './dashboard/components/the-post/the-post.component';
import { CommentsComponent } from './dashboard/components/comments/comments.component';
import { HttpClientModule } from "@angular/common/http";
import { InlineEditComponent } from './dashboard/components/inline-edit/inline-edit.component';
import { LatestCommentsComponent } from './dashboard/components/comments/latestcomments/latestcomments.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    PostDetailComponent,
    PostsComponent,
    CommentsComponent,
    InlineEditComponent,
    LatestCommentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
