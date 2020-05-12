import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private pCollection : Observable<Order[]>;

  constructor() { }

  // Get Collection
  get collection() : Observable<Order[]> {
    return null;
  }

  // Set Collection

  // Change State

  // Update item

  // Add item

  //Get Item by Id
}
