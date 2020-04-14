import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CommentService} from './comment.service';
import {CommentModel} from '../../models/CommentModel';

@Injectable({
  providedIn: 'root'
})
export class CommentResolverService implements Resolve<CommentModel[]>{

  constructor(private commentService: CommentService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentModel[]> {
    if (route.paramMap.get('id')){
      return this.commentService.getComment(route.paramMap.get('id'));
    }else{
      return this.commentService.getComments();
    }
  }
}
