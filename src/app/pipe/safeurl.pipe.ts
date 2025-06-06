import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safeurl'
})
export class SafeurlPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
