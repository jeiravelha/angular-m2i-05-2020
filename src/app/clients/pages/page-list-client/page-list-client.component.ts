import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Button } from 'src/app/shared/interfaces/button';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.scss']
})
export class PageListClientComponent implements OnInit {

  public headers: string[];
  public collection$: Subject<Client[]> = new Subject();
  public title: string;
  public subtitle: string;

  public btnRoute : Button;

  public states = Object.values(StateClient);

  constructor(private cs: ClientsService) { }

  ngOnInit(): void {
    this.btnRoute = {
      text: 'Add Client', route: 'add'
    }
    this.title = 'Clients :';
    this.subtitle = 'All clients';
    this.headers = ["","","Name", "CA", "CA TTC", "State"];
    this.cs.collection.subscribe((datas) => {
      this.collection$.next(datas);
    })
  }

  public changeState(item : Client, event){
    this.cs.changeState(item, event.target.value).subscribe( (res) => {
      //console.log(res);
      //Traitement Error + mise à jour state de l'item car réussi
      item.state = res.state;
    } );
  }

  public deleterecord(item : Client){
    this.cs.delete(item.id).subscribe( (res) => {
      this.cs.collection.subscribe((datas) => {
        this.collection$.next(datas);
      })
    } );
  }

  public editrecord(item : Client){
    //
  }
}
