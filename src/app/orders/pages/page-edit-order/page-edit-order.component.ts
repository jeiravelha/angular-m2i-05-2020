import { Component, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public states = Object.values(StateOrder);

  constructor(private os: OrdersService) { }


  ngOnInit(): void {
    this.title = 'Orders :';
    this.subtitle = 'Edit order';
  }

}
