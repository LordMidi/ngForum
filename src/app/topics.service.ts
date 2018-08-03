import { Injectable } from '@angular/core';
import { Topic } from './topic';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  private topics: Topic[] = [
    new Topic('Implementing the methods and properties of MatFormFieldControl'),
    new Topic('Creating a custom form field control'),
  ];

  constructor() { }

  getTopics = function(): Topic[] {
    return this.topics;
  }

  /**
   * add topic
   */
  addTopic = function(title: string): void {
    this.topics.push(new Topic(title));
  }

}
