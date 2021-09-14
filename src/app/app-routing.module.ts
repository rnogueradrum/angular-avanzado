import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstrumentoComponent } from './components/instrumento/instrumento.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';
import { LoginComponent } from './components/login/login.component';
import { Instrumento } from './models/instrumento.model';
import { HomePagePage } from './pages/home-page/home-page.page';
import { InstrumentoPagePage } from './pages/instrumento-page/instrumento-page.page';
import { InstrumentosPagePage } from './pages/instrumentos-page/instrumentos-page.page';
import { NotFoundPagePage } from './pages/not-found-page/not-found-page.page';

const routes: Routes = [
  {
    path: '', // http:localhost:4200/
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'home', // http:localhost:4200/home
    component: HomePagePage,
    //canActivate: [AuthGuard]
  },
  {
    path: 'login', // http:localhost:4200/login
    component: LoginComponent
  },
  {
    path: 'instrumentos',  // http:localhost:4200/contacts
    component: InstrumentosPagePage,
    //canActivate: [AuthGuard],
  },
  {
    path: 'instrumento', // 'instrumento/:id'http:localhost:4200/contact/1
    component: InstrumentoPagePage,
    //canActivate: [AuthGuard],
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
