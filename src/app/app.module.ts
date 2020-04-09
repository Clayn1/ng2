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
import {MinimalPostComponent} from './components/minimal-post/minimal-post.component';

const routes = [{
  path: '', component: AppComponent, resolve: {allPosts: PostResolverService, allUsers: UserResolverService}
}, {
  path: 'post/:postId',
  component: PostComponent,
  resolve: {allPosts: PostResolverService, allComments: CommentResolverService, allUsers: UserResolverService}
}, {
  path: 'user/:userId', component: UserComponent, resolve: {allUsers: UserResolverService, allPosts: PostResolverService}
}];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CommentComponent,
    PostComponent,
    AllPostsComponent,
    MinimalPostComponent,
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
