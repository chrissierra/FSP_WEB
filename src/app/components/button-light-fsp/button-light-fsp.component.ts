import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-light-fsp',
  templateUrl: './button-light-fsp.component.html',
  styleUrls: ['./button-light-fsp.component.scss']
})
export class ButtonLightFspComponent   {

  constructor() { }
  
  @Input() nombre: string = '';
  @Input() minWidthPropValue: any = 'auto';
  @Input() useIcon: boolean = false;
  @Input() classIcon: string = '';
  @Output() eClick = new EventEmitter<any>();


  onClickEvent(){
    this.eClick.emit('buttonEvent');
  }

}
