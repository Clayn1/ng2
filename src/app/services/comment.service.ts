import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CommentModel} from '../../models/CommentModel';
import {HttpClient} from '@angular/common/http';
import {PostModel} from '../../models/PostModel';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>('https://jsonplaceholder.typicode.com/comments');
  }
  getComment(id): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }
}
