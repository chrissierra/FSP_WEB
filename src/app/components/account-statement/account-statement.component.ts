import { Component, Input, OnInit } from '@angular/core';
import { AccountStatement } from 'src/app/interfaces/account-statement.interface';
@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.scss']
})
export class AccountStatementComponent implements OnInit {
  @Input() accountObject: AccountStatement = {} as AccountStatement;

  constructor() { }

  ngOnInit(): void {
   
  }

}
