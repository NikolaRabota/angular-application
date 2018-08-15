import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../../post";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    // @ts-ignore
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  getPostFromService(id: number): Observable<Post> {
    // @ts-ignore
    return this.http.get("https://jsonplaceholder.typicode.com/posts/".concat(id.toString()))
  }
}

