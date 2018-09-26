import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'forum-header',
  templateUrl: './forum-header.component.html',
  styleUrls: ['./forum-header.component.css']
})
export class ForumHeaderComponent implements OnInit {

  private isHome: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {

    // provide indicator for home link
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e : NavigationEnd) => {
      this.isHome = e.url === '/';
    });

  }

}
