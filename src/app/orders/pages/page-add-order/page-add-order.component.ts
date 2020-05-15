import { Component, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { OrdersService } from '../../services/orders.service';
import { Router } from '@angular/router';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public states = Object.values(StateOrder);

  constructor(private os: OrdersService, private router: Router) { }


  ngOnInit(): void {
    this.title = 'Orders :';
    this.subtitle = 'Add order';
  }

  public add(item:Order){
    this.os.Add(item).subscribe((res) =>{
      //si OK return list
      this.router.navigate(['orders']);
    });
  }

}
