import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estados-de-cuenta',
  templateUrl: './estados-de-cuenta.component.html',
  styleUrls: ['./estados-de-cuenta.component.scss']
})
export class EstadosDeCuentaComponent implements OnInit {

  constructor() { }
  public useIcon: boolean = true;
  ngOnInit(): void {
  }

}
