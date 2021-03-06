import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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


import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
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
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })

  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    CarrouselComponent,
    NgxSpinnerModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
