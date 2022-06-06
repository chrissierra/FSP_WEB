import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { NavbarLightComponent } from '../shared/navbar-light/navbar-light.component';
import { ButtonFspComponent } from './button-fsp/button-fsp.component';
import { ButtonLightFspComponent } from './button-light-fsp/button-light-fsp.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { RouterModule } from '@angular/router';
import { CardsFspComponent } from './cards-fsp/cards-fsp.component';



@NgModule({
  declarations: [    
    NavbarComponent,
    NavbarLightComponent,
    ButtonFspComponent,
    ButtonLightFspComponent,
    CarrouselComponent,
    CardsFspComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    NavbarLightComponent,
    ButtonFspComponent,
    ButtonLightFspComponent,
    CarrouselComponent,
    CardsFspComponent
  ]
})
export class ComponentsModule { }
