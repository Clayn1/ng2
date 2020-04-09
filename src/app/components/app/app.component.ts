import {Component} from '@angular/core';
import {UserModel} from '../../../models/UserModel';
import {CommentModel} from '../../../models/CommentModel';
import {PostModel} from '../../../models/PostModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: UserModel[] = [];
  comments: CommentModel[] = [];
  posts: PostModel[] = [];

  constructor(private activatedRoute: ActivatedRoute) {

  }
}
