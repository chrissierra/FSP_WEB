import { Component, Input, OnInit, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-card-image-ua',
  templateUrl: './card-image-ua.component.html',
  styleUrls: ['./card-image-ua.component.scss']
})
export class CardImageUaComponent implements OnInit, AfterContentInit {
  @Input() heightInput: string = '48%'
  @Input() urlImg: string = '../../../assets/Images/banner-ua2.png'
  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    
  }

  ngAfterContentInit(){
    this.elRef.nativeElement.style.setProperty('--imagen-url', this.urlImg)
  }

}
