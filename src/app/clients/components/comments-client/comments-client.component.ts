import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-comments-client',
  templateUrl: './comments-client.component.html',
  styleUrls: ['./comments-client.component.scss']
})
export class CommentsClientComponent implements OnInit {

  public firstitem$ : Subject<Client>;

  constructor(private cs: ClientsService) { }

  ngOnInit(): void {
    this.firstitem$ = this.cs.firstItem$;
  }

}
