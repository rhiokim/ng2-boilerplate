import { Component, OnInit } from '@angular/core';
import { Router, RouteSegment } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.css']
})
export class PostComponent implements OnInit {

  constructor(
    private router: Router,
    private routeSegment: RouteSegment
  ) {}

  ngOnInit() {
    // ref1 - https://coryrylan.com/blog/introduction-to-angular-2-routing
    // ref2 - https://playcode.org/routing-in-angular-2-rc-1/
    let id = this.routeSegment.getParam('id');
    console.log(id);
  }

}
