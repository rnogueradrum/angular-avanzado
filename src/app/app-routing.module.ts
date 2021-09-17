import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagePage } from './pages/home-page/home-page.page';
import { InstrumentoPagePage } from './pages/instrumento-page/instrumento-page.page';
import { InstrumentosPagePage } from './pages/instrumentos-page/instrumentos-page.page';
import { NotFoundPagePage } from './pages/not-found-page/not-found-page.page';

const routes: Routes = [
  {
    path: '', // http:localhost:4200/
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home', // http:localhost:4200/home
    component: HomePagePage,
  },
  {
    path: 'instrumentos',  // http:localhost:4200/contacts
    component: InstrumentosPagePage,
  },
  {
    path: 'instrumento', // 'instrumento/:id'http:localhost:4200/contact/1
    component: InstrumentoPagePage,
  },
  {
    path: '**', // Lo que no sea nada de lo anterior irá a NotFounPage. Hay que ponerla al final
    component: NotFoundPagePage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
