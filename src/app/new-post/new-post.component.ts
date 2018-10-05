import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Post } from '../post';
import { TopicsService } from '../topics.service';

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  @Input() topicId: string;
  @ViewChild('post') postField: ElementRef; 

  postMinLength: number = 10;
  postControl: FormControl = new FormControl('', [Validators.minLength(this.postMinLength)]);  
  
  constructor(private topicsService: TopicsService) {}

  /**
   * Create new post for a topic.
   * @param text content of the new post
   */
  newPost(text: string): void {
    this.topicsService.addPostToTopic(this.topicId, new Post(text));
    this.postField.nativeElement.value = '';
    this.postControl.reset();
  }

}
