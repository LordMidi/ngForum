import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStorage } from 'ngx-webstorage';
import { Post } from './post';
import { Topic } from './topic';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

/**
 * Service to access (stored) topics.
 */
export class TopicsService {

  @LocalStorage('prop') topics: Topic[]; // bind to local storage

  private topicObservable: Observable<Topic[]>;

  /**
   * The constructor.
   */
  constructor() {
    this.topics = this.topics || [];
    this.topicObservable = of(this.topics);
  }
  
  /**
   * Get all topics.
   */
  getTopics(): Observable<Topic[]> {
    return this.topicObservable;
  }

  /**
   * Create a new topic.
   * @param text Title of the topic.
   * @param firstPost first post to start the topic with
   */
  addTopic(text: string, firstPost: Post): void {
    this.topics.push(new Topic(text, [firstPost]));
    this.topics = this.topics; // https://github.com/PillowPillow/ng2-webstorage#known-issues
  }

  /**
   * Get a specific topic.
   * @param id identifiert of the topic
   */
  getTopic(id: string): Observable<Topic> {
    return this
      .getTopics()
      .pipe(map(topics => topics.filter(topic => topic.id === id)[0]));
  }

}
