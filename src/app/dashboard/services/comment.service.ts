import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Comment} from "../../comment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]> {
    // @ts-ignore
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
  }
}
