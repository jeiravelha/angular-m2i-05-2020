import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Client } from 'src/app/shared/models/client';
import { environment } from 'src/environments/environment';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private pCollection : Observable<Client[]>;
  private urlApi = environment.urlApi;
  private itemDeleted: Client;
  public firstItem$: BehaviorSubject<Client> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}clients`).pipe(
      tap((clientstab) => { this.firstItem$.next(clientstab[0])})
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
