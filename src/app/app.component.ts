import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test titre dynamique';

  constructor(private router : Router, private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit(): void {
    this.changeTitle();
  }

  private changeTitle() : void {
    this.router.events.subscribe(event => {
      switch(true) {
        case event instanceof NavigationEnd:
          let child = this.route.firstChild;
          while(child?.firstChild) {
            child = child.firstChild;
          }
          this.titleService.setTitle(child?.snapshot.data.title);
      }
    })
  }
}
