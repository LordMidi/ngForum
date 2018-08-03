import { Component, OnInit } from '@angular/core';
import { TopicsService } from './topics.service';
import { Topic } from './topic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-forum';
  topics: Topic[];
  newTopic: string = '';

  constructor(private topicsService: TopicsService) { }

  ngOnInit() {
    this.topics = this.topicsService.getTopics();
  }
  
}
