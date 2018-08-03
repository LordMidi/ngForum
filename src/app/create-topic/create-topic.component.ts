import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../topics.service';

@Component({
  selector: 'create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.css']
})
export class CreateTopicComponent implements OnInit {

  constructor(private topicsService: TopicsService) { }

  ngOnInit() {
  }

  createTopic(title: string): void {
    this.topicsService.addTopic(title);
  }

}
