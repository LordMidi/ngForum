import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { TopicsService } from '../topics.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private topicsService: TopicsService) { }

  ngOnInit() { }

  search(search: string) : void {
    this.topicsService.getTopics().pipe(
      map((topics) => of(topics))
    ).subscribe((topic) => {
      console.log(topic);
    });
  }

}
