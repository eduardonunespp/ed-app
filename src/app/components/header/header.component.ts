import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() name: string = '';
  @Output() alteraNomePai: EventEmitter<string> = new EventEmitter

  num: number = 0;
  desabilitaCidadeInput: boolean = false
  disabled: boolean = false
  type: string = 'text'

  cidade: string = ''

  constructor() {}

  ngOnInit(): void {
    this.name = this.name
  }
  
  handleClick = () => {
    this.num += 1;
  };
  
  alteraNome = () => {
    this.name = 'sim';
    this.alteraNomePai.emit('Eduardo')
  };

  resetaCidade = () => {
    this.cidade = ''
  }

  disableCidade = () => {
    this.desabilitaCidadeInput = !this.desabilitaCidadeInput;
  }


  ngOnChanges(changes: SimpleChanges): void {}
}
