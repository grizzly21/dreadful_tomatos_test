import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  toogle = false;
  constructor(public router: Router, private eventService: EventService) {}

  ngOnInit(): void {}

  filterToggle() {
    this.toogle = !this.toogle;
    this.eventService.emitEvent(this.toogle);
  }
}
