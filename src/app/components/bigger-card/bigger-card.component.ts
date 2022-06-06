import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bigger-card',
  templateUrl: './bigger-card.component.html',
  styleUrls: ['./bigger-card.component.scss']
})
export class BiggerCardComponent implements OnInit {
  @Input() cardTitle: string = '';
  @Input() cardBody: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reprehenderit molestiae totam libero, neque vel ipsam commodi, deleniti impedit quibusdam odio soluta minima optio facere consequatur possimus, ipsum tempora. Qui?';
  @Input() cardImage: string = '../assets/Images/image_login.png'
  constructor() { }

  ngOnInit(): void {
  }

}
