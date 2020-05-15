import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/shared/models/client';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.component.html',
  styleUrls: ['./details-client.component.scss']
})
export class DetailsClientComponent implements OnInit {

  public firstitem$ : Subject<Client>;

  constructor(private cs: ClientsService) { }

  ngOnInit(): void {
    this.firstitem$ = this.cs.firstItem$;
  }

}
