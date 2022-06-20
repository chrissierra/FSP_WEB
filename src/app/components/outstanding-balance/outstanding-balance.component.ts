import { Component, OnInit, Input } from '@angular/core';
import { AccountStatement } from 'src/app/interfaces/account-statement.interface';
import { registerLocaleData } from '@angular/common';
import local from '@angular/common/locales/es-CL'
@Component({
  selector: 'app-outstanding-balance',
  templateUrl: './outstanding-balance.component.html',
  styleUrls: ['./outstanding-balance.component.scss']
})
export class OutstandingBalanceComponent implements OnInit {
  @Input() accountObject: AccountStatement = {} as AccountStatement;
  constructor() {registerLocaleData(local, 'es-CL'); }

  ngOnInit(): void {
  }

  percentProgressBar(){
    const montoUsado = Number(this.accountObject.total_amount_used)
    const montoDisponible = Number(this.accountObject.total_amount_available)
    console.log(montoDisponible)
    console.log(montoUsado)
    console.log("(montoUsado /montoDisponible) ", (montoUsado /montoDisponible) )
    return (montoUsado /montoDisponible) > 1? 100 : (montoUsado /montoDisponible)
  }

}
