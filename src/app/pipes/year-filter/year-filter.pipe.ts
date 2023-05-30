import { Pipe, PipeTransform } from '@angular/core';
import { IShows } from 'src/app/interfaces/IShow';

@Pipe({
  name: 'yearFilter',
})
export class YearFilterPipe implements PipeTransform {
  transform(items: IShows[], year: number): any[] {
    if (!items || !year) {
      return items;
    }

    return items.filter((item) => item.releaseYear === year);
  }
}
