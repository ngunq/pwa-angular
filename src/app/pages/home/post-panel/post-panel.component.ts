import { Component, OnInit } from '@angular/core';
import { FacebookService } from "../../../services/facebook.service";

@Component({
  selector: 'app-post-panel',
  templateUrl: './post-panel.component.html',
  styleUrls: ['./post-panel.component.css']
})
export class PostPanelComponent implements OnInit {

  posts = [{ "author": { "name": "Angular", "avt": "https://angular.io/assets/images/favicons/favicon.ico" }, "time": "23 mins", "content": "Welcome to Angular! Angular helps you build modern applications for the web, mobile, or desktop.", "reactions": ["React JS", "Bootstrap"], "comments": [{ "author": { "name": "React JS", "avt": "https://miro.medium.com/max/480/1*ypTuZbQNEV1oGkAfn85AUA.png" }, "time": "9 mins", "content": "Awesome!" }] }, { "author": { "name": "React JS", "avt": "https://miro.medium.com/max/480/1*ypTuZbQNEV1oGkAfn85AUA.png" }, "time": "12 hours", "content": "React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.", "reactions": ["Angular", "Bootstrap"], "comments": [{ "author": { "name": "Angular", "avt": "https://angular.io/assets/images/favicons/favicon.ico" }, "time": "2 hours", "content": "Amazing!" }, { "author": { "name": "Bootstrap", "avt": "https://getbootstrap.com/favicon.ico" }, "time": "just now", "content": "Nice!" }] }]

  constructor(private facebookService: FacebookService) { }

  ngOnInit() {
    //   this.facebookService.getAllPosts((res) => {
    //     this.posts = res
    //   })
  }
}
