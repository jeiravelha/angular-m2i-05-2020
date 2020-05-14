import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value){
      if(args.length > 0)
      {
        switch(args[0]) {
          case 'Order_HT': {
            return value.totalHt();
             break;
          }
          case 'Order_TTC': {
            return value.totalTtc();
             break;
          }
          case 'Client_TTC': {
            return value.ca * 1.2;
             break;
          }
          default: {
             //statements;
             break;
          }
       }
      }

    }
    return null;
  }
}
