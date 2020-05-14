import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public states = Object.values(StateClient);

  constructor(private cs: ClientsService) { }


  ngOnInit(): void {
    this.title = 'Clients :';
    this.subtitle = 'Add client';
  }

}
