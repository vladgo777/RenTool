import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSearchLineComponent } from './card-search-line.component';

describe('CardSearchLineComponent', () => {
  let component: CardSearchLineComponent;
  let fixture: ComponentFixture<CardSearchLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSearchLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSearchLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
