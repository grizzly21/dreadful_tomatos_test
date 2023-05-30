import { Component, OnInit } from '@angular/core';
import { ICards } from 'src/app/interfaces/ICards';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cards: ICards[] = [
    {
      title: 'Movies',
      imageSrc: '../../../assets/movies.png',
      routerLink: 'movies',
    },
    {
      title: 'Series',
      imageSrc: '../../../assets/series.png',
      routerLink: 'series',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
