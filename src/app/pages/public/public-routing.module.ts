import { NgModule } from '@angular/core';
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
