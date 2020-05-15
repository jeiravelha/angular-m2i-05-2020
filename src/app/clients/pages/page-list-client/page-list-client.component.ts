import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Button } from 'src/app/shared/interfaces/button';
import { Router, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Link } from 'src/app/shared/interfaces/link';

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
  public navlinks : Link[];

  constructor(private cs: ClientsService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.btnRoute = {
      text: 'Add Client', route: 'add'
    }

    this.route.data.subscribe( (datas) => {
        this.title = datas.title;
        this.subtitle = datas.subtitle;
    })

    this.headers = ["","","Name", "CA", "CA TTC", "State","Comment"];
    this.cs.collection.subscribe((datas) => {
      this.collection$.next(datas);
    })

    this.navlinks = [{route: 'details', label: 'Details'}, {route: 'comments', label: 'Comments'}];
  }

  public changeState(item : Client, event){
    this.cs.changeState(item, event.target.value).subscribe( (res) => {
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
    this.router.navigate(['clients/edit', item.id], { queryParams:  filter, skipLocationChange: true});
    window.history.pushState(this.router.url,this.router.url);
  }

  public loadDetail(item: Client){
    this.cs.firstItem$.next(item);
  }

}
