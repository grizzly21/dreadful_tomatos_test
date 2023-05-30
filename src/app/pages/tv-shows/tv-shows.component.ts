import { Component, OnInit } from '@angular/core';
import { IShows } from 'src/app/interfaces/IShow';
import { EventService } from 'src/app/services/event.service';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['../movies/movies.component.scss'],
})
export class TvShowsComponent implements OnInit {
  series: IShows[];
  filteredItems: IShows[];
  searchText = '';
  year = null;
  filtersToggle = false;

  constructor(
    private readonly showService: ShowsService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.showService.getAllShows().subscribe(
      (res) => {
        this.series = res.filter((item) => item.programType === 'series');
      },
      (err) => {
        console.log(err);
      }
    );

    this.eventService.getEvent().subscribe((eventData: any) => {
      this.filtersToggle = eventData;
    });
  }

  onYearSelected(year: number | null) {
    this.year = year;
  }
}
