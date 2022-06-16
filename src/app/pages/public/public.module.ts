import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { PublicRoutingModule } from './public-routing.module';
import { CarrouselComponent } from 'src/app/components/carrousel/carrousel.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { AppModule } from 'src/app/app.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';
import { ProspectosComponent } from './prospectos/prospectos.component';
import { CaracteristicasTarjetaComponent } from './caracteristicas-tarjeta/caracteristicas-tarjeta.component';
import { AvanceComponent } from './avance/avance.component';
import { SuperAvanceComponent } from './super-avance/super-avance.component';
import { InformacionAvanceComponent } from './informacion-avance/informacion-avance.component';
import { MuerteAccidentalComponent } from './muerte-accidental/muerte-accidental.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { LugaresDePagoComponent } from './lugares-de-pago/lugares-de-pago.component';
import { EducacionFinancieraComponent } from './educacion-financiera/educacion-financiera.component';
import { InicioComponent } from './inicio/inicio.component';
import { SegurosComponent } from './seguros/seguros.component';



@NgModule({
  declarations: [
    IndexComponent,
    ProspectosComponent,
    CaracteristicasTarjetaComponent,
    AvanceComponent,
    SuperAvanceComponent,
    InformacionAvanceComponent,
    MuerteAccidentalComponent,
    BeneficiosComponent,
    LugaresDePagoComponent,
    EducacionFinancieraComponent,
    InicioComponent,
    SegurosComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ComponentsModule,
    RouterModule
  ]
})
export class PublicModule { }


/* import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { } */
