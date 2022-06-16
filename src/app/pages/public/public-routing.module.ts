import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import { ProspectosComponent } from './prospectos/prospectos.component';
import { AvanceComponent } from './avance/avance.component';
import { InicioComponent } from './inicio/inicio.component';
import { SuperAvanceComponent } from './super-avance/super-avance.component';
import { EducacionFinancieraComponent } from './educacion-financiera/educacion-financiera.component';
import { LugaresDePagoComponent } from './lugares-de-pago/lugares-de-pago.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { CaracteristicasTarjetaComponent } from './caracteristicas-tarjeta/caracteristicas-tarjeta.component';
import { SegurosComponent } from './seguros/seguros.component';
import { MuerteAccidentalComponent } from './muerte-accidental/muerte-accidental.component';
const routes = [
  {
    path: '', 
    component: IndexComponent,
    children:[
      {
        path: 'index',
        component: InicioComponent
      },
      {
        path: 'avance',
        component: AvanceComponent
      },
      {
        path: 'super-avance',
        component: SuperAvanceComponent
      },
      {
        path: 'educacion-financiera',
        component: EducacionFinancieraComponent
      },
      {
        path: 'lugares-pago',
        component: LugaresDePagoComponent
      },
      {
        path: 'beneficios',
        component: BeneficiosComponent
      },
      {
        path: 'caracteristicas-tarjeta',
        component: CaracteristicasTarjetaComponent
      },
      {
        path: 'avance',
        component: AvanceComponent
      },
      {
        path: 'seguros',
        component: SegurosComponent
      },
      {
        path: 'muerte-accidental',
        component: MuerteAccidentalComponent
      },
      {
        path: 'Prospects',
        component: ProspectosComponent
      },
      {
        path: '**',
        component: InicioComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes) 
  ],
  exports: [RouterModule]
})
export class PublicRoutingModule { }



/* import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes = [
  {
    path: '', 
    children:[
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: '**',
        component: LoginComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes) 
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { } */
