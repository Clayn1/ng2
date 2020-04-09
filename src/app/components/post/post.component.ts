import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../../models/PostModel';
import {ActivatedRoute} from '@angular/router';
import {UserModel} from '../../../models/UserModel';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: PostModel;
  user: UserModel;

  constructor(private activatedRoute: ActivatedRoute) {
    this.post = this.activatedRoute.snapshot.data.allPosts[+this.activatedRoute.snapshot.url[1].path - 1];
    const users = this.activatedRoute.snapshot.data.allUsers;
    const comments = this.activatedRoute.snapshot.data.allComments;
    const postComments = [];
    for (const user of users) {
      if (user.id === this.post.userId) {
        this.user = user;
        break;
      }
    }
    for (const comment of comments) {
      if (comment.postId === this.post.id) {
        postComments.push(comment);
      }
    }
    this.post.comments = postComments;
  }

  ngOnInit(): void {
  }

}
