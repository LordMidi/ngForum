import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../topic';

@Component({
  selector: 'topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  @Input() topics: Topic[];

  constructor() { }

  ngOnInit() {
  }

}
