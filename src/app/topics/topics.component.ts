import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../topics.service';
import { Topic } from '../topic';

@Component({
  selector: 'topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics: Topic[] = [];
  searchQuery: string = '';
  isNewTopicVisible: boolean = false;

  /**
   * The constructor.
   * @param topicsService 
   */
  constructor(private topicsService: TopicsService) { }

  ngOnInit() {
    this.topicsService.getTopics().subscribe((topic: Topic) => {
      this.topics.push(topic);

      // sort topics - latest on top
      this.topics.sort((a: Topic, b: Topic) =>
        a.posts[a.posts.length - 1].date.toString() <
          b.posts[b.posts.length - 1].date.toString() ? 1 : -1
      );

    });
  }

  toggleNewTopicVisibilty(): void {
    this.isNewTopicVisible = !this.isNewTopicVisible;
  }

}
