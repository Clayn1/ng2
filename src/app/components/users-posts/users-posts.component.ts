import {Component, OnInit} from '@angular/core';
import {PostModel} from '../../../models/PostModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users-posts',
  templateUrl: './users-posts.component.html',
  styleUrls: ['./users-posts.component.css']
})
export class UsersPostsComponent implements OnInit {

  posts: PostModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute
      .params.subscribe(() => this.posts = this.activatedRoute.snapshot.data.allPosts);
  }

  ngOnInit(): void {
  }

}
