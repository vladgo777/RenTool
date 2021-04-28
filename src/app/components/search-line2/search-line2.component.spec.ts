import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLine2Component } from './search-line2.component';

describe('SearchLine2Component', () => {
  let component: SearchLine2Component;
  let fixture: ComponentFixture<SearchLine2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLine2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLine2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
