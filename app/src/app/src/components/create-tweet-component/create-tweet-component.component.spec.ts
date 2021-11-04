import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTweetComponentComponent } from './create-tweet-component.component';

describe('CreateTweetComponentComponent', () => {
  let component: CreateTweetComponentComponent;
  let fixture: ComponentFixture<CreateTweetComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTweetComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTweetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
