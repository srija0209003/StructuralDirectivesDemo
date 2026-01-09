import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTicket } from './movie-ticket';

describe('MovieTicket', () => {
  let component: MovieTicket;
  let fixture: ComponentFixture<MovieTicket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieTicket]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieTicket);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
