import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.scss']
})
export class MiPerfilComponent implements OnInit {
  public screenActiveClave: boolean = false;
  public classDatosPersonales: string = 'pestaniaActiva'
  public classCambiarClave: string = 'classPointer'
  constructor() { }

  ngOnInit(): void {
  }

  navigateToCambiarClave(): void {
    this.screenActiveClave = true;
    this.classCambiarClave = 'pestaniaActiva'
    this.classDatosPersonales = 'classPointer'
  }

  navigateToDatosPersonales(): void {
    this.screenActiveClave = false;
    this.classCambiarClave = 'classPointer'
    this.classDatosPersonales = 'pestaniaActiva'
  }

}
