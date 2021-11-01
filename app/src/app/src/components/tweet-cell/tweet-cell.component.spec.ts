import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCellComponent } from './tweet-cell.component';

describe('TweetCellComponent', () => {
  let component: TweetCellComponent;
  let fixture: ComponentFixture<TweetCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
