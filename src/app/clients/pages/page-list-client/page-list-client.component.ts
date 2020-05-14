import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.scss']
})
export class PageListClientComponent implements OnInit {

  public headers: string[];
  public collection$: Observable<Client[]>;
  public title: string;
  public subtitle: string;

  public states = Object.values(StateClient);

  constructor(private os: ClientsService) { }

  ngOnInit(): void {
    this.title = 'Clients :';
    this.subtitle = 'All clients';
    this.headers = ["Name", "CA", "State"];
    this.collection$ = this.os.collection;
  }

  public changeState(item : Client, event){
    this.os.changeState(item, event.target.value).subscribe( (res) => {
      //console.log(res);
      //Traitement Error + mise à jour state de l'item car réussi
      item.state = res.state;
    } );
  }
}
