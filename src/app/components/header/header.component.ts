import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  name: string = 'test in view';
  num: number = 0;

  constructor() {}

  handleClick = () => {
    this.num += 1;
  };

  alteraNome = () => {
    this.name = 'sim';
  };

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}
}
