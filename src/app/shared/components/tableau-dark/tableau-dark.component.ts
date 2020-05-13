import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Order } from '../../models/order';

@Component({
  selector: 'app-tableau-dark',
  templateUrl: './tableau-dark.component.html',
  styleUrls: ['./tableau-dark.component.scss']
})
export class TableauDarkComponent implements OnInit, OnChanges {

  @Input() collection: Order[];
  @Input() headers: string[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() : void {
  }

}
