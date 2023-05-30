import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private eventSubject = new Subject<any>();

  emitEvent(eventData: any) {
    this.eventSubject.next(eventData);
  }

  getEvent() {
    return this.eventSubject.asObservable();
  }
}
