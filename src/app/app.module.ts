import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NavbarLightComponent } from './shared/navbar-light/navbar-light.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarLightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
