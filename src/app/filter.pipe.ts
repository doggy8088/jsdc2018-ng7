import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], type: string = ''): any {
    switch (type) {
      case 'active':
        return value.filter(v => !v.isDone);
        break;
      case 'completed':
        return value.filter(v => v.isDone);
        break;
      default:
        return value;
        break;
    }
  }
}
