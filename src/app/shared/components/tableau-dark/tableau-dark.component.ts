import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../models/order';

@Component({
  selector: 'app-tableau-dark',
  templateUrl: './tableau-dark.component.html',
  styleUrls: ['./tableau-dark.component.scss']
})
export class TableauDarkComponent implements OnInit {

  @Input() collection: Order[];

  constructor() { }

  ngOnInit(): void {
  }

}
