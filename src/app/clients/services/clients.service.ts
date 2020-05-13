import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from 'src/app/shared/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private pCollection : Observable<Client[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}clients`).pipe(
      // mapping des "functions" genre calcul etc... pour que ça remonte dans le modèle Order
      map((tab) => {
        return tab.map((obj) => {
          return new Client(obj)
        })
      })
    )
   }

  // Get Collection
  get collection() : Observable<Client[]> {
    return this.pCollection;
  }

  // Set Collection
  set collection(col : Observable<Client[]>) {
    this.pCollection = col;
  }

  // Change State

  // Update item

  // Add item

  //Get Item by Id
}
