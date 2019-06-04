import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Post, Crypto } from '../model/post.model';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    // 'Authorization': 'my-auth-token'
  })
};
@Injectable({providedIn: 'root'})

export class PostsService {
  host = 'http://localhost:3001/api/v1';
  private posts: Post[] = [];
  private cryptos: Crypto[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http.get<{message: string, posts: Post[]}>(this.host)
      .subscribe((postData) => {
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(crypto: string, exchange: string, image: File) {
    const name: string = image.name;
    const post: Crypto = {id: null, crypto, exchange, image};
    console.log(post.image.name);
    this.http
      .post<{message: string, crypto: string, exchange: string, image: File}>(this.host, post)
      .subscribe((resData) => {
        console.log(resData);
      });
  }
}
