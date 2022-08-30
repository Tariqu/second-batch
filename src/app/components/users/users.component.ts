import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostService } from 'src/app/services/post/post.service';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  posts!: Post[];
  constructor(private post: PostService, private router: Router) {}

  ngOnInit(): void {
    this.post.getAllPost().subscribe({
      next: (value) => {
        this.posts = value;
      },
      error: () => {},
    });
  }

  gotoDetail(val: number) {
    this.router.navigate([`/users/${val}`]);
  }
}
