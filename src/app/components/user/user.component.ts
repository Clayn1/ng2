import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from '../../../models/UserModel';
import {ActivatedRoute, Router} from '@angular/router';
import {PostModel} from '../../../models/PostModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: UserModel;


  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

  navigate(user: UserModel) {
    this.router.navigate([user.id, 'posts'], {
      state: {user},
      relativeTo: this.activatedRoute
    });
  }
}
