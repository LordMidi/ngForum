import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../topics.service';
import { Topic } from '../topic';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topic: Topic;

  constructor(
    private route: ActivatedRoute,
    private topicsService: TopicsService,
    private router: Router
  ) { }

  ngOnInit() {
    let topicId = this.route.snapshot.paramMap.get('id');
    this.topicsService.getTopic(topicId).subscribe(topic => this.topic = topic);

    // invalid topic id provided - no topic found
    if (!this.topic) {
      this.router.navigate(['/404']);
    }

  }

}
