import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';  // importando as rotas

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  // configurando as rotas
  ],
  providers: [],
  bootstrap: []  // removendo o AppComponent da bootstrap array
})
export class AppModule { }
