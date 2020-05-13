import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-order',
  templateUrl: './page-list-order.component.html',
  styleUrls: ['./page-list-order.component.scss']
})
export class PageListOrderComponent implements OnInit {

  public headers: string[];
  public collection$: Observable<Order[]>;
  public title: string;
  public subtitle: string;
  constructor(private os: OrdersService) { }

  ngOnInit(): void {
    this.title = 'Orders :';
    this.subtitle = 'All orders';
    this.headers = ["Type", "Client", "NbJours", "TJM HT", "Total HT", "Total TTC", "State"];
    this.collection$ = this.os.collection;
  }

}
