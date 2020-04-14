import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PostService} from './post.service';
import {PostModel} from '../../models/PostModel';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<PostModel[]>{

  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostModel[]> {
    if (route.queryParamMap.get('postId')){
      return this.postService.getPost(route.queryParamMap.get('postId'));
    }else if (route.paramMap.get('id')){
      return this.postService.getUsersPosts(route.paramMap.get('id'));
    }else{
      return this.postService.getPosts();
    }
  }
}
