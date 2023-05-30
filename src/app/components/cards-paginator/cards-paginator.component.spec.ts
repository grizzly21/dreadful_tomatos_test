import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPaginatorComponent } from './cards-paginator.component';

describe('CardsPaginatorComponent', () => {
  let component: CardsPaginatorComponent;
  let fixture: ComponentFixture<CardsPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsPaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
