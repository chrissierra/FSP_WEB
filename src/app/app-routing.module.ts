import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarCookiesGuard } from './guards/validar-cookies.guard';



const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'public',
    loadChildren: () => import('./pages/public/public.module').then( m => m.PublicModule ),

  },
  {
    path: 'user-area',
    loadChildren: () => import('./pages/user-area/user-area.module').then( m => m.UserAreaModule ),
    canActivate: [ValidarCookiesGuard],
    canLoad: [ValidarCookiesGuard]
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: 'public'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
