import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { PublicRoutingModule } from './public-routing.module';
import { CarrouselComponent } from 'src/app/components/carrousel/carrousel.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { AppModule } from 'src/app/app.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    IndexComponent
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
