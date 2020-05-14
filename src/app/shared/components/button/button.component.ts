import { Component, OnInit, Input } from '@angular/core';
import { faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text : string;
  @Input() route : string;
  @Input() href : string;
  @Input() action : boolean;
  public myCurrentIcon = faSave;

  constructor() { }

  ngOnInit(): void {
  }

  public doAction() {

  }

}
