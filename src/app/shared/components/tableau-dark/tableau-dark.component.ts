import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tableau-dark',
  templateUrl: './tableau-dark.component.html',
  styleUrls: ['./tableau-dark.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableauDarkComponent implements OnInit, OnChanges {
  @Input() headers: string[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() : void {
  }

}
