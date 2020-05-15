import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { ClientsService } from '../../services/clients.service';
import { EventEmitter } from 'protractor';
import { Client } from 'src/app/shared/models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public states = Object.values(StateClient);

  constructor(private cs: ClientsService, private router: Router) { }


  ngOnInit(): void {
    this.title = 'Clients :';
    this.subtitle = 'Add client';
  }

  public add(item:Client){
    this.cs.Add(item).subscribe((res) =>{
      //si OK return list
      this.router.navigate(['clients']);
    });
  }

}
