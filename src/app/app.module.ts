import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';
import { InstrumentoComponent } from './components/instrumento/instrumento.component';
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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

// Firebase FireStore Config
import { AngularFireModule } from '@angular/fire/compat';
import { FirestoreModule } from '@angular/fire/firestore';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';

// Módulos  NGRX (Redux)
import { StoreModule } from '@ngrx/store';
import { RootReducer } from './store/reducers/rootReducer';
import { StoreDevtoolsModule  } from '@ngrx/store-devtools';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InstrumentosComponent,
    InstrumentoComponent,
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
    MatTableModule,
    MatProgressSpinnerModule,
    //Módulos para trabajar con Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    // NGRX
    // Creamos el Store a partir del RootReducer y sus reducers con sus estados iniciales
    // StoreDevtool guardará hasta 5 acciones.
    StoreModule.forRoot(RootReducer, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
