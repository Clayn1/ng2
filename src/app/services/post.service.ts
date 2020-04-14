import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostModel} from '../../models/PostModel';
import {UserModel} from '../../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getUsersPosts(id): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
  }
  getPost(id): Observable<PostModel[]>{
    return this.http.get<PostModel[]>(`https://jsonplaceholder.typicode.com/posts/`);
  }
}
