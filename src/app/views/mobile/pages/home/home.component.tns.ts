import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.tns.html',
  styleUrls: ['./home.component.tns.css'],
})
export class HomeComponent implements OnInit {
  title = 'pwa-facebook-newfeed';

  constructor() { }

  ngOnInit() {
  }
}
