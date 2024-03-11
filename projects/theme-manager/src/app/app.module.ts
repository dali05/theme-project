import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routeComArr } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthComponent} from "./auth/auth.component";
import {AuthGuard} from "./auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    routeComArr,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthComponent,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
