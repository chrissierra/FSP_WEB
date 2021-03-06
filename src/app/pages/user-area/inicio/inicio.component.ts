import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { AccountStatement } from 'src/app/interfaces/account-statement.interface';
import { NgxSpinnerService } from "ngx-spinner";
import { SessionService } from 'src/app/services/session.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public objectAccountStatement: AccountStatement = {} as AccountStatement
  constructor(private sessionService:SessionService, private spinner: NgxSpinnerService, private customerService: CustomersService) { 

 /*    const rut = '18369890'
    const dv = '7' */

    const { rut, dv } = this.sessionService.getUser();
    
    console.log("this.sessionService.getUser()", this.sessionService.getUser())
    this.spinner.show()
    this.customerService.getAccountStatement(rut!, dv!)
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
    window.scroll({
      top: 100,
      left: 100,
      behavior: 'smooth'
    });
  }

}
