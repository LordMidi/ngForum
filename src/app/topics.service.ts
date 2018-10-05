import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { LocalStorage } from 'ngx-webstorage';
import { Post } from './post';
import { Topic } from './topic';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

/**
 * Service to access (stored) topics.
 */
export class TopicsService {

  @LocalStorage('prop') topics: Topic[]; // bind to local storage

  private topicObservable: Observable<Topic>;

  /**
   * The constructor.
   */
  constructor() {
    this.topics = this.topics || [];
    this.topicObservable = from(this.topics);
  }
  
  /**
   * Get all topics.
   */
  getTopics(): Observable<Topic> {
    return this.topicObservable;
  }

  /**
   * Create a new topic.
   * @param text Title of the topic.
   * @param firstPost first post to start the topic with
   * @return id of the created topic
   */
  addTopic(text: string, firstPost: Post): string {
    let topic = new Topic(text, [firstPost]);
    this.topics.push(topic);
    this.serializeTopics();
    return topic.id;
  }

  /**
   * Get a specific topic.
   * @param id identifier of the topic
   */
  getTopic(id: string): Observable<Topic> {
    return this
      .getTopics()
      .pipe(filter(topic => topic.id === id));
  }

  /**
   * Add a post to a topic.
   * @param id identifier of the topic
   * @param post post to add
   */
  addPostToTopic(id: string, post: Post) {
    this.getTopic(id).subscribe((topic) => {
      topic.posts.push(post);
    });
    this.serializeTopics();
  }

  /**
   * Needed for storage syncronization
   * https://github.com/PillowPillow/ng2-webstorage#known-issues
   */
  private serializeTopics() {
    this.topics = this.topics;
  }

}
