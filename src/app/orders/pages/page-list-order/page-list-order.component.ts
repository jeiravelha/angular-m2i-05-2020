import { Component, OnInit, IterableDiffers } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Button } from 'src/app/shared/interfaces/button';

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

  public btnRoute : Button;
  public btnHref : Button;
  public btnAction : Button;

  public states = Object.values(StateOrder);

  constructor(private os: OrdersService) { }

  ngOnInit(): void {
    this.btnRoute = {
      text: 'Add Route', route: 'add'
    }
    this.btnHref = {
      text: 'Google', href:'http://www.google.com'
    }
    this.btnAction = {
      text: 'Action bouton', action: true
    }

    this.title = 'Orders :';
    this.subtitle = 'All orders';
    this.headers = ["","","Type", "Client", "NbJours", "TJM HT", "Total HT", "Total TTC", "State"];
    this.collection$ = this.os.collection;
  }

  public changeState(item : Order, event){
    this.os.changeState(item, event.target.value).subscribe( (res) => {
      //console.log(res);
      //Traitement Error + mise à jour state de l'item car réussi
      item.state = res.state;
    } );
  }

  public openbtn() {
    console.log("openbtn");
  }

  public deleterecord(item : Order){
    this.os.delete(item.id).subscribe( (res) => {
    } );
  }

  public editrecord(item : Order){
    //
  }

}
