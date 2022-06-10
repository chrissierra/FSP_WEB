import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-ua',
  templateUrl: './header-ua.component.html',
  styleUrls: ['./header-ua.component.scss']
})
export class HeaderUaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  sendEcommerce():void{
    window.location.href = 'https://fashionspark.com'
  }


  logOut(){
    this.router.navigate(['../index'])
  }
}
