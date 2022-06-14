import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { NavbarLightComponent } from '../shared/navbar-light/navbar-light.component';
import { ButtonFspComponent } from './button-fsp/button-fsp.component';
import { ButtonLightFspComponent } from './button-light-fsp/button-light-fsp.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { RouterModule } from '@angular/router';
import { CardsFspComponent } from './cards-fsp/cards-fsp.component';
import { BiggerCardComponent } from './bigger-card/bigger-card.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { OutstandingBalanceComponent } from './outstanding-balance/outstanding-balance.component';
import { CardImageUaComponent } from './card-image-ua/card-image-ua.component';
import { HeaderUaComponent } from './header-ua/header-ua.component';
import { NavbarUaComponent } from './navbar-ua/navbar-ua.component';
import { FooterComponent } from '../shared/footer/footer.component';



@NgModule({
  declarations: [    
    NavbarComponent,
    FooterComponent,
    NavbarLightComponent,
    ButtonFspComponent,
    ButtonLightFspComponent,
    CarrouselComponent,
    CardsFspComponent,
    BiggerCardComponent,
    AccountStatementComponent,
    OutstandingBalanceComponent,
    CardImageUaComponent,
    HeaderUaComponent,
    NavbarUaComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    NavbarLightComponent,
    ButtonFspComponent,
    ButtonLightFspComponent,
    CarrouselComponent,
    CardsFspComponent,
    BiggerCardComponent,
    AccountStatementComponent,
    OutstandingBalanceComponent,
    CardImageUaComponent,
    HeaderUaComponent,
    NavbarUaComponent
  ]
})
export class ComponentsModule { }
