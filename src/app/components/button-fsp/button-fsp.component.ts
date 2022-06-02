import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-fsp',
  templateUrl: './button-fsp.component.html',
  styleUrls: ['./button-fsp.component.scss']
})
export class ButtonFspComponent  {
  @Input() nombre: string = '';
  @Input() minWidthPropValue: any = 'auto';
  @Input() useIcon: boolean = false;
  @Input() classIcon: string = '';
  @Output() eClick = new EventEmitter<any>();

  constructor() { }



  onClickEvent(){
    this.eClick.emit('buttonEvent');
  }



}
