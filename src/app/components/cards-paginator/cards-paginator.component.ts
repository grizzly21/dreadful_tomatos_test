import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IShows } from 'src/app/interfaces/IShow';

@Component({
  selector: 'app-cards-paginator',
  templateUrl: './cards-paginator.component.html',
  styleUrls: ['./cards-paginator.component.scss'],
})
export class CardsPaginatorComponent implements OnInit, OnChanges {
  @Input() value: IShows[];
  @Input() itemsPerPage = 10;
  @Input() searchText = '';
  @Input() year = null;
  itemsCount: number;
  pagesCount: number;
  currentPage = 1;

  search = '';
  yearFilter = null;

  paginationArray: IShows[] = [];

  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes.value?.currentValue && this.paginationArray.length === 0) {
      this.itemsCount = this.value?.length;
      this.pagesCount = Math.ceil(this.itemsCount / this.itemsPerPage);
      this.mapPaginationArray();
    }

    this.search = changes?.searchText?.currentValue;
    this.yearFilter = changes?.year?.currentValue;
  }

  mapPaginationArray(): void {
    const startPoint = this.itemsPerPage * this.currentPage - this.itemsPerPage;
    for (
      let i = startPoint, j = 0;
      i < this.itemsPerPage + startPoint;
      i++, j++
    ) {
      this.paginationArray[j] = this.value[i];
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.pagesCount && page !== this.currentPage) {
      this.currentPage = page;
      this.mapPaginationArray();
    }
  }

  goToNext() {
    if (this.currentPage < this.pagesCount) {
      this.goToPage(this.currentPage + 1);
    }
  }

  goToPrevious() {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  getPagesArray(): number[] {
    const pagesArray: number[] = [];
    for (let i = 1; i <= this.pagesCount; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  }
}
