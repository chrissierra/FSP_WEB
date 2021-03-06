import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-fsp',
  templateUrl: './cards-fsp.component.html',
  styleUrls: ['./cards-fsp.component.scss']
})
export class CardsFspComponent implements OnInit {
  @Input() cardTitle: string = '';
  @Input() cardBody: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reprehenderit molestiae totam libero, neque vel ipsam commodi, deleniti impedit quibusdam odio soluta minima optio facere consequatur possimus, ipsum tempora. Qui?';
  @Input() cardImage: string = '../assets/Images/cardimage.png'
  constructor() { }

  ngOnInit(): void {
  }

}
