import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective {

  @Input() appState : any;
  @HostBinding('class') nomclass : String;

  constructor() {
    console.log("call");
   }

   ngOnChanges():void{
    this.nomclass = this.formatClass(this.appState);
   }

   private formatClass(state: string) : string {
    return `state-${ state.replace(/\s/g,'').toLowerCase() }`;
   }

}
