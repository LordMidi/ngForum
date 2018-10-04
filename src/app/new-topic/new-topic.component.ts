import { Component, ViewChild } from '@angular/core';
import { TopicsService } from '../topics.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../post';

/**
 * Component to create a topic including title and the first post of the topic.
 */
@Component({
  selector: 'new-topic',
  templateUrl: './new-topic.component.html',
  styleUrls: ['./new-topic.component.css']
})
export class NewTopicComponent {
  
  @ViewChild('topic') topicField;
  @ViewChild('post') postField;
  topicMinLength: number = 5;
  postMinLength: number = 10;
  topicControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(this.topicMinLength)]);
  postControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(this.postMinLength)]);
  newForm: FormGroup = new FormGroup({
    topic: this.topicControl,
    post: this.postControl
  });
  isVisible = false;

  /**
   * @param topicsService {TopicsService}
   */
  constructor(private topicsService: TopicsService, private router: Router) { }
  
  /**
   * Create new topic.
   * @param topic {string} the title of the topic to be created.
   */
  newTopic(topic: string, postText: string): void {
    if (this.topicControl.valid && this.postControl.valid) {
      let topicId = this.topicsService.addTopic(topic, new Post(postText));

      this.router.navigate([`/topic/${topicId}`]);

    }
  }

}
