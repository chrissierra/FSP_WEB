import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { UserAreaRoutingModule } from './user-area-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { InicioComponent } from './inicio/inicio.component';
import { EstadosDeCuentaComponent } from './estados-de-cuenta/estados-de-cuenta.component';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';



@NgModule({
  declarations: [IndexComponent, MiPerfilComponent, InicioComponent, EstadosDeCuentaComponent, CambiarClaveComponent],
  imports: [
    CommonModule,
    UserAreaRoutingModule,
    ComponentsModule
  ]
})
export class UserAreaModule { }

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