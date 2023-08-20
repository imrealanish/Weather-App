import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelToCel'
})
export class KelToCelPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return Math.round(value - 273.15);
    
  }

}
