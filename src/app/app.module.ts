import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NavbarLightComponent } from './shared/navbar-light/navbar-light.component';
import { UserAreaComponent } from './components/user-area/user-area.component';

import { CookieService } from 'ngx-cookie-service';
import { ButtonFspComponent } from './components/button-fsp/button-fsp.component';
import { ButtonLightFspComponent } from './components/button-light-fsp/button-light-fsp.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarLightComponent,
    UserAreaComponent,
    ButtonFspComponent,
    ButtonLightFspComponent,
    CarrouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
