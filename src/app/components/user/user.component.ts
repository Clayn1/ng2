import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../../models/UserModel';
import {ActivatedRoute} from '@angular/router';
import {PostModel} from '../../../models/PostModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: UserModel;

  constructor(private activatedRoute: ActivatedRoute) {
    this.user = this.activatedRoute.snapshot.data.allUsers[+this.activatedRoute.snapshot.url[1].path - 1];
    const posts = this.activatedRoute.snapshot.data.allPosts;
    const userPosts = [];
    for (const post of posts) {
      if (post.userId === this.user.id) {
        userPosts.push(post);
      }
    }
    this.user.posts = userPosts;
    console.log(this.user.posts);
  }

  ngOnInit(): void {
  }

}
