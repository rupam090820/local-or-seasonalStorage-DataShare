import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PnfComponent } from './pnf/pnf.component';
import { HomeComponent } from './home/home.component';
import{HttpClientModule} from '@angular/common/http';
import { ApiComponent } from './api/api.component';
import { NavComponent } from './nav/nav.component';
import { SnipperComponent } from './snipper/snipper.component'

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    PnfComponent,
    HomeComponent,
    ApiComponent,
    NavComponent,
    SnipperComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
