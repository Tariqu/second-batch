import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.BASE_URL}/posts`);
  }

  getPostById(userId: number): Observable<Post> {
    return this.http.get<Post>(`${environment.BASE_URL}/posts/${userId}`);
  }
}
