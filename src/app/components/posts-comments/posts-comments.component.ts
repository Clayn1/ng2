import { Component, OnInit } from '@angular/core';
import {CommentModel} from '../../../models/CommentModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-posts-comments',
  templateUrl: './posts-comments.component.html',
  styleUrls: ['./posts-comments.component.css']
})
export class PostsCommentsComponent implements OnInit {

  comments: CommentModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute
      .params.subscribe(() => this.comments = this.activatedRoute.snapshot.data.allComments);
  }

  ngOnInit(): void {
  }

}
