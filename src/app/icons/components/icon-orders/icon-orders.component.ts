import { Component, OnInit } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-orders',
  templateUrl: './icon-orders.component.html',
  styleUrls: ['./icon-orders.component.scss']
})
export class IconOrdersComponent implements OnInit {

  public myCurrentIcon = faCartPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
