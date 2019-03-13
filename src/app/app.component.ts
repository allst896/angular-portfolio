import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
    this.router.events.subscribe( (v: RouterEvent) => {
      console.log(v);
    })
  }

  ngOnInit() {

  }

  onRouterOutletActivate() {

  }

  onRouterOutletDeactiveate() {
    
  }
}
