import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IShows } from '../interfaces/IShow';

@Injectable({
  providedIn: 'root',
})
export class ShowsService {
  constructor(private http: HttpClient) {}

  getAllShows(): Observable<IShows[]> {
    return this.http
      .get<IShows[]>(
        'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json'
      )
      .pipe(map((data: any) => data?.entries));
  }
}
