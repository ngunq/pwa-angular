import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";
// import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  private _activatedUrl: string

  constructor(
    private router: Router,
    // private routerExtensions: RouterExtensions
  ) { }

  ngOnInit(): void {
    this._activatedUrl = "/home"
    this.router.events
			.pipe(filter((event: any) => event instanceof NavigationEnd))
			.subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
  }

  isComponentSelected(url: string): boolean {
		return this._activatedUrl === url;
  }
  
  onNavItemTap(navItemRoute: string): void {
		// this.routerExtensions.navigate([navItemRoute], {
		// 	transition: {
		// 		name: "fade"
		// 	},
		// 	clearHistory: true
		// });
	}

}
