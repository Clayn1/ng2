import {Component, OnInit} from '@angular/core';
import {PostModel} from '../../../models/PostModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: PostModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.posts = this.activatedRoute.snapshot.data.allPosts;
  }

  ngOnInit(): void {
  }

}
