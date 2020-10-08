import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';

import {HttpService} from '../app/service/http.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ListadoComponent } from './components/listado/listado.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {MatButtonModule} from '@angular/material/button';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import {MatSelectModule} from '@angular/material/select';
import { MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    DetallesComponent,
    ListadoComponent,
    NotFoundComponent,
    PokemonesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatPaginatorModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatSidenavModule
  ],
  providers: [
    HttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
