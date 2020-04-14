import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../../models/PostModel';
import {ActivatedRoute, Router} from '@angular/router';
import {UserModel} from '../../../models/UserModel';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: PostModel;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

  navigate(post: PostModel) {
    this.router.navigate([post.id, 'comments'], {
      state: {post},
      relativeTo: this.activatedRoute
    });
  }
}
