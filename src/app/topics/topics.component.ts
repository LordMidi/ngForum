import { Component, OnInit, Input } from '@angular/core';
import { TopicsService } from '../topics.service';
import { Topic } from '../topic';

@Component({
  selector: 'topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  public topics: Topic[] = [];

  /**
   * The constructor.
   * @param topicsService 
   */
  constructor(private topicsService: TopicsService) { }

  ngOnInit() {
    this.topicsService.getTopics().subscribe((x: Topic[]): void => {

      // sort topics - newest first
      console.log(x);
      this.topics = x.sort(
        (a:Topic, b:Topic) => a.posts[0].date.toString() < b.posts[0].date.toString() ? 1 : -1
      );

    });
  }

}
