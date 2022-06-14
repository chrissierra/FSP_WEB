import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NavbarLightComponent } from './shared/navbar-light/navbar-light.component';


import { CookieService } from 'ngx-cookie-service';
import { ButtonFspComponent } from './components/button-fsp/button-fsp.component';
import { ButtonLightFspComponent } from './components/button-light-fsp/button-light-fsp.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { AppRoutingModule } from './app-routing.module';
import { PublicModule } from './pages/public/public.module';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    ComponentsModule,
    RouterModule,
    HttpClientModule

  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    CarrouselComponent
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
