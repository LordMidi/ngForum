import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../topics.service';
import { SearchResult } from './search-result';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string = '';
  searchResults: SearchResult[] = [];

  constructor(private topicsService: TopicsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.query = this.route.snapshot.paramMap.get('query');
    this.search(this.query);
   }

   /**
    * 
    * @param query string to search for in posts
    */
  search(query: string) : void {
    let cleanedQuery: string = query.trim().toLowerCase();
    this.topicsService.getTopics().subscribe(topic => {

      // search for posts containing query string
      let matchingPosts = topic.posts.filter(post => post.text.toLowerCase().search(cleanedQuery) != -1);

      matchingPosts.forEach(post => {
        this.searchResults.push(new SearchResult(topic, post));
      })

      // sort results - latest on top
      this.searchResults.sort((a: SearchResult, b: SearchResult) =>
        a.post.date.toString() < b.post.date.toString() ? 1 : -1
      );

    });
  }

}
