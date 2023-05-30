import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsPaginatorComponent } from './components/cards-paginator/cards-paginator.component';
import { SearchPipe } from './pipes/search/search.pipe';
import { FormsModule } from '@angular/forms';
import { YearPickerComponent } from './components/year-picker/year-picker.component';
import { YearFilterPipe } from './pipes/year-filter/year-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TvShowsComponent,
    MoviesComponent,
    HeaderComponent,
    FooterComponent,
    CardsPaginatorComponent,
    SearchPipe,
    YearPickerComponent,
    YearFilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [SearchPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
