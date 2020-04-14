import {Component, OnInit} from '@angular/core';
import {PostModel} from '../../../models/PostModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comments-post',
  templateUrl: './comments-post.component.html',
  styleUrls: ['./comments-post.component.css']
})
export class CommentsPostComponent implements OnInit {

  post: PostModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute
      .queryParams.subscribe((queryParam) => {
      this.post = this.activatedRoute.snapshot.data.post[queryParam.postId - 1];
    });
    console.log(this.post);
  }

  ngOnInit(): void {
  }
}
