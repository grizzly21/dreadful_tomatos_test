import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-year-picker',
  templateUrl: './year-picker.component.html',
  styleUrls: ['./year-picker.component.scss'],
})
export class YearPickerComponent {
  @Input() totalYears: number;
  @Output() yearSelected = new EventEmitter<number>();

  currentPage = 1;
  itemsPerPage = 12;
  selectedYear = null;

  get totalPages(): number {
    return Math.ceil(this.totalYears / this.itemsPerPage);
  }

  get sYear(): number | null {
    return this.selectedYear;
  }

  get pages(): number[] {
    const currentYear = new Date().getFullYear();
    const start = Math.abs(
      (this.currentPage - 1) * this.itemsPerPage - currentYear
    );
    const end = Math.min(start - this.itemsPerPage + 1);
    return Array.from({ length: start - end + 1 }, (_, i) => start - i);
  }

  prevPage(): void {
    this.currentPage--;
  }

  nextPage(): void {
    this.currentPage++;
  }

  selectYear(year: number): void {
    if (year === this.selectedYear && this.selectYear !== null) {
      this.selectedYear = null;
      this.yearSelected.emit(null);
    } else {
      this.selectedYear = year;
      this.yearSelected.emit(year);
    }
  }
}
