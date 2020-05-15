import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from 'src/app/shared/models/client';
import { environment } from 'src/environments/environment';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

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
  public changeState(item: Client, state: StateClient) : Observable<Client> {
    const obj = new Client({...item});
    obj.state = state;

    return this.update(obj);
  }

  // Update item
  public update(item:Client) : Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}clients/${item.id}`, item);
  }

  // Add item
  public Add(item:Client) :  Observable<Client> {
    return this.http.post<Client>(`${this.urlApi}clients`, item);
  }

  // Delete item
  public delete(itemid:number) : Observable<Client>{
    return this.http.delete<Client>(`${this.urlApi}clients/${itemid}`);
  }

  //Get Item by Id
  public GetItemById(id:number) :  Observable<Client> {
    return this.http.get<Client>(`${this.urlApi}clients/${id}`);
  }
}
