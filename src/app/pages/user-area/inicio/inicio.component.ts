import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { AccountStatement } from 'src/app/interfaces/account-statement.interface';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public objectAccountStatement: AccountStatement = {} as AccountStatement
  constructor(private spinner: NgxSpinnerService, private customerService: CustomersService) { 

    const rut = '18369890'
    const dv = '7'
    this.spinner.show()
    this.customerService.getAccountStatement(rut, dv)
    .subscribe((data: AccountStatement) => {
      console.log(data)
      this.objectAccountStatement = data;
    }, (error) => {
      console.log(error)
    }, ()=> {
      this.spinner.hide()
    })

  }

  ngOnInit(): void {

  }

}
