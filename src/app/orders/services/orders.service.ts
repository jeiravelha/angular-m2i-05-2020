import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private pCollection : Observable<Order[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}orders`);
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

  // Update item

  // Add item

  //Get Item by Id
}
