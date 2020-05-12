import { Component, OnInit } from '@angular/core';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-clients',
  templateUrl: './icon-clients.component.html',
  styleUrls: ['./icon-clients.component.scss']
})
export class IconClientsComponent implements OnInit {

  public myCurrentIcon = faAddressCard;

  constructor() { }

  ngOnInit(): void {
  }

}
