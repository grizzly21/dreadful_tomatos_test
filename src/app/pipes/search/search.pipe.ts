import { Pipe, PipeTransform } from '@angular/core';
import { IShows } from '../../interfaces/IShow';

@Pipe({
  name: 'search',
  pure: false,
})
export class SearchPipe implements PipeTransform {
  transform(
    items: any,
    allItems: IShows[],
    searchText: string,
    searchKey: string
  ): any[] {
    if (!items || !searchText || !searchKey) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return allItems.filter((item) =>
      item[searchKey].toLowerCase().includes(searchText)
    );
  }
}
