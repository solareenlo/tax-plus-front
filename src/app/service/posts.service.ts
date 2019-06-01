import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Post, Crypto } from '../model/post.model';

const host = 'https://thetangle.jp';

@Injectable({providedIn: 'root'})

export class PostsService {
  private posts: Post[] = [];
  private cryptos: Crypto[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http.get<{message: string, posts: Post[]}>(host)
      .subscribe((postData) => {
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(crypto: string, exchange: string) {
    const cryptos: Crypto = {id: null, crypto, exchange};
    this.http
      .post<{message: string}>(host, crypto);
  }
}
