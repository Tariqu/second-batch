import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post/post.service';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss'],
})
export class UsersDetailComponent implements OnInit {
  postDetail!: Post;
  userId!: string;
  constructor(private route: ActivatedRoute, private post: PostService) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId') ?? '';
    this.post.getPostById(+this.userId).subscribe({
      next: (val) => {
        this.postDetail = val;
      },
      error: () => {},
    });
  }
}
