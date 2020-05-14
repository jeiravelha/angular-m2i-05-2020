import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/shared/models/order';
import { environment } from 'src/environments/environment';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private pCollection : Observable<Order[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
      // mapping des "functions" genre calcul etc... pour que ça remonte dans le modèle Order
      map((tab) => {
        return tab.map((obj) => {
          return new Order(obj)
        })
      })
    )
   }

  // Get Collection
  get collection() : Observable<Order[]> {
    return this.pCollection;
  }

  // Set Collection
  set collection(col : Observable<Order[]>) {
    this.pCollection = col;
  }

  // Change State
  public changeState(item: Order, state: StateOrder) : Observable<Order> {
    const obj = new Order({...item});
    obj.state = state;

    return this.update(obj);
  }

  // Update item
  public update(item:Order) : Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}orders/${item.id}`, item);
  }

  // Add item


  //Get Item by Id

}
