import { Component, OnInit, Input } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/shared/models/client';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public states = Object.values(StateClient);

  public currentclient$ : Observable<Client>;

  constructor(private cs: ClientsService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.title = 'Clients :';
    this.subtitle = 'Edit client';

    this.currentclient$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = +params.get("id")
        return this.cs.GetItemById(id)
      })
    );

  }

  public update(item: Client) {
    this.cs.update(item).subscribe((res) => {
      this.router.navigate(['clients']);
    });
  }

}
