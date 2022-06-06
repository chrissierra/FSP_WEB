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