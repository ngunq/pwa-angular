import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { componentDeclarations, routes } from "./home.common";

@NgModule({
  declarations: [
    ...componentDeclarations
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class HomeModule { }
