import { Component, OnInit } from '@angular/core';
import { FacebookService } from "../../../../services/facebook.service";

@Component({
  selector: 'app-post-panel',
  templateUrl: './post-panel.component.html',
  styleUrls: ['./post-panel.component.css']
})
export class PostPanelComponent implements OnInit {
  posts = []

  constructor(private facebookService: FacebookService) { }

  ngOnInit() {
    this.facebookService.getAllPosts((res) => {
      this.posts = res
    })
  }
}
