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
  topicControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  postControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(10)]);
  newForm: FormGroup = new FormGroup({
    topic: this.topicControl,
    post: this.postControl
  });

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

  /**
   * Get matching error message for topic input.
   * @return {string} the error message to display
   */
  getTopicErrorMessage(): string {
    let errorMessage: string = '';
    if (this.topicControl.hasError('required')) {
      errorMessage = 'empty!?';
    }
    if (this.topicControl.hasError('minlength')) {
      errorMessage = 'longer!';
    }
    return errorMessage;
  }

  /**
   * Get matching error message for post textarea.
   * @return {string} the error message to display
   */
  getPostErrorMessage(): string {
    let errorMessage: string = '';
    if (this.postControl.hasError('required')) {
      errorMessage = 'empty!?';
    }
    if (this.postControl.hasError('minlength')) {
      errorMessage = 'longer!';
    }
    return errorMessage;
  }

}
