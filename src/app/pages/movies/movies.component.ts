import { Component, OnInit } from '@angular/core';
import { IShows } from 'src/app/interfaces/IShow';
import { EventService } from 'src/app/services/event.service';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: IShows[];
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
        this.movies = res.filter((item) => item.programType === 'movies');
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
