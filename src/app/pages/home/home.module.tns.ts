import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { componentDeclarations, routes } from "./home.common";

@NgModule({
  declarations: [
    ...componentDeclarations
  ],
  imports: [
    NativeScriptRouterModule.forRoot(routes),
    NativeScriptCommonModule
  ],
  exports: [
    NativeScriptRouterModule,
    ...componentDeclarations
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
