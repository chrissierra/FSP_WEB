import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  eventoClick(): void {


    const yourUrl = 'https://localhost:9443/samlartresolve'
fetch(yourUrl, {
    method: 'GET',
    headers: new Headers({
        'Access-Control-Allow-Origin': '*',
    }),
})
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

    

  }

}
