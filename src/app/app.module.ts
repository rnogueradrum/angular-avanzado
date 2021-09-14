import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';
import { InstrumentoComponent } from './components/instrumento/instrumento.component';
import { LoginComponent } from './components/login/login.component';
import { HomePagePage } from './pages/home-page/home-page.page';
import { InstrumentosPagePage } from './pages/instrumentos-page/instrumentos-page.page';
import { InstrumentoPagePage } from './pages/instrumento-page/instrumento-page.page';
import { NotFoundPagePage } from './pages/not-found-page/not-found-page.page';

//Angular Material
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    InstrumentosComponent,
    InstrumentoComponent,
    LoginComponent,
    HomePagePage,
    InstrumentosPagePage,
    InstrumentoPagePage,
    NotFoundPagePage,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatSnackBarModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
