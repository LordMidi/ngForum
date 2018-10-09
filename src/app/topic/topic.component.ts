import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
    private router: Router,
    private topicsService: TopicsService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    let topicId = this.route.snapshot.paramMap.get('topicId');
    let postId = this.route.snapshot.queryParams['postId'];

    this.topicsService.getTopic(topicId).subscribe(topic => {
      this.topic = topic;

      // scroll to post if parameter is provided
      if (postId) {
        this.changeDetectorRef.detectChanges(); // fire change detection to get DOM updated
        document.querySelector('#p' + postId).scrollIntoView();
      }
    });

    // invalid topic id provided - no topic found
    if (!this.topic) {
      this.router.navigate(['/404']);
    }

  }

}
