import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../../models/PostModel';
import {UserModel} from '../../../models/UserModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-minimal-post',
  templateUrl: './minimal-post.component.html',
  styleUrls: ['./minimal-post.component.css']
})
export class MinimalPostComponent implements OnInit {
  @Input()
  post: PostModel;
  user: UserModel;

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.post);
  }

  ngOnInit(): void {
    console.log(this.post);
    const users = this.activatedRoute.snapshot.data.allUsers;
    for (const user of users){
      if (user.id === this.post.userId){
        this.user = user;
        break;
      }
    }
  }

}
