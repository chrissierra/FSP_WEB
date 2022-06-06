import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { NavbarLightComponent } from '../shared/navbar-light/navbar-light.component';
import { ButtonFspComponent } from './button-fsp/button-fsp.component';
import { ButtonLightFspComponent } from './button-light-fsp/button-light-fsp.component';
import { CarrouselComponent } from './carrousel/carrousel.component';



@NgModule({
  declarations: [    
    NavbarComponent,
    NavbarLightComponent,
    ButtonFspComponent,
    ButtonLightFspComponent,
    CarrouselComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    NavbarLightComponent,
    ButtonFspComponent,
    ButtonLightFspComponent,
    CarrouselComponent
  ]
})
export class ComponentsModule { }
