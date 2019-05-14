import { Routes } from '@angular/router';
import { HomeComponent } from "./home.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { PostPanelComponent } from "./post-panel/post-panel.component";
import { LeftSidebarComponent } from "./left-sidebar/left-sidebar.component";

export const componentDeclarations: any[] = [
    HomeComponent,
    TopBarComponent,
    PostPanelComponent,
    LeftSidebarComponent
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    { path: 'home', component: HomeComponent }
];
