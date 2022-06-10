import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { InicioComponent } from './inicio/inicio.component';
import { EstadosDeCuentaComponent } from './estados-de-cuenta/estados-de-cuenta.component';
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
        path: 'MiPerfil',
        component: MiPerfilComponent
      },
      {
        path: 'EstadosDeCuenta',
        component: EstadosDeCuentaComponent
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
  imports: [
    RouterModule.forChild(routes) 
  ],
  exports: [RouterModule]
})
export class UserAreaRoutingModule { }



/* import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
const routes = [
  {
    path: '', 
    children:[
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: '**',
        component: IndexComponent
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
export class PublicRoutingModule { } */