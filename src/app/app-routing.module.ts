import { NgModule } from '@angular/core';
import { RouterModule, ExtraOptions } from '@angular/router';
import { routes } from './app.routes';

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
