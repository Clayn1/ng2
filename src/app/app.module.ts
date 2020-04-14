import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {UserComponent} from './components/user/user.component';
import {CommentComponent} from './components/comment/comment.component';
import {PostComponent} from './components/post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {PostResolverService} from './services/post-resolver.service';
import {UserResolverService} from './services/user-resolver.service';
import {CommentResolverService} from './services/comment-resolver.service';
import {AllCommentsComponent} from './components/all-comments/all-comments.component';
import {AllUsersComponent} from './components/all-users/all-users.component';
import { UsersPostsComponent } from './components/users-posts/users-posts.component';
import { PostsCommentsComponent } from './components/posts-comments/posts-comments.component';
import { CommentsPostComponent } from './components/comments-post/comments-post.component';

const routes = [{
  path: 'users',
  component: AllUsersComponent,
  resolve: {allUsers: UserResolverService},
  children: [{
    path: ':id/posts',
    component: UsersPostsComponent,
    resolve: {allPosts: PostResolverService}
  }]
}, {
  path: 'comments',
  component: AllCommentsComponent,
  resolve: {allComments: CommentResolverService},
  children: [{
    path: '',
    queryParams: {postId: ':id'},
    component: CommentsPostComponent,
    resolve: {post: PostResolverService}
  }]
}, {
  path: 'posts',
  component: AllPostsComponent,
  resolve: {allPosts: PostResolverService},
  children: [{
    path: ':id/comments',
    component: PostsCommentsComponent,
    resolve: {allComments: CommentResolverService}
  }]
}];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CommentComponent,
    PostComponent,
    AllPostsComponent,
    AllCommentsComponent,
    AllUsersComponent,
    UsersPostsComponent,
    PostsCommentsComponent,
    CommentsPostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
