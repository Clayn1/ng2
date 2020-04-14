import {Component} from '@angular/core';
import {UserModel} from '../../../models/UserModel';
import {CommentModel} from '../../../models/CommentModel';
import {PostModel} from '../../../models/PostModel';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: UserModel[] = [];
  comments: CommentModel[] = [];
  posts: PostModel[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }
  goToUsers(){
    this.router.navigate(['users'], {relativeTo: this.activatedRoute});
  }
  goToComments(){
    this.router.navigate(['comments'], {relativeTo: this.activatedRoute});
  }
  goToPosts(){
    this.router.navigate(['posts'], {relativeTo: this.activatedRoute});
  }
}
