import { Component, OnInit } from '@angular/core';
import { CustomersService } from './../../../services/customers.service';
import { Period, Item } from '../../../interfaces/periods.interface';

@Component({
  selector: 'app-estados-de-cuenta',
  templateUrl: './estados-de-cuenta.component.html',
  styleUrls: ['./estados-de-cuenta.component.scss']
})
export class EstadosDeCuentaComponent implements OnInit {
  items: Item[] = []
  periods: Period = {
    items: this.items
  };
  hola: any;
  constructor(
    private customersService: CustomersService
    ) { }
    public useIcon: boolean = true;
  ngOnInit(
    ): void {
      // this.onStateAccount('11855134', '6')
      this.customersService.getAccountStatementPeriods('11855134', '6').subscribe((data: any) =>{
        this.items = data;
        // console.log(this.items[3].nombre)
      })
    }

    onDate(){

      // this.items.map(item => item.fecha_estado_cuenta = new Date())
      // new Date(this.items.map(item => item.fecha_estado_cuenta = ))
      this.customersService.getAccountStatementPeriods('11855134', '6').subscribe((data: any) =>(
        this.items = data
      ));
    }
  }
