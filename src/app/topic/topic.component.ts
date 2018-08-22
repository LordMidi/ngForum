import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../topics.service';
import { Topic } from '../topic';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topic: Topic;

  constructor(
    private route: ActivatedRoute,
    private topicsService: TopicsService
  ) { }

  ngOnInit() {
    const topicId = this.route.snapshot.paramMap.get('id');
    this.topicsService.getTopic(topicId).subscribe(topic => {
      this.topic = topic;
    }
  );
  }

}
