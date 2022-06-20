import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignOutService } from 'src/app/services/sign-out.service';

@Component({
  selector: 'app-header-ua',
  templateUrl: './header-ua.component.html',
  styleUrls: ['./header-ua.component.scss']
})
export class HeaderUaComponent implements OnInit {

  constructor(private router: Router, private signOut: SignOutService) { }

  ngOnInit(): void {
  }


  sendEcommerce():void{
    window.location.href = 'https://fashionspark.com'
  }


  logOut(){
    this.signOut.logOut();
    this.router.navigate(['../index'])
  }
}
