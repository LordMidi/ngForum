import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { TopicsService } from '../topics.service';

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  @Input() topicId: string;

  constructor(private topicsService: TopicsService) {}

  ngOnInit() { }

  newPost(text: string): void {
    this.topicsService.addPostToTopic(this.topicId, new Post(text));
  }

}
