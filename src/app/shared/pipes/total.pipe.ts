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
          case 'HT': {
            return value.totalHt();
             break;
          }
          case 'TTC': {
            return value.totalTtc();
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
