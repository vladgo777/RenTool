import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenLinkSearchComponent } from './children-link-search.component';

describe('ChildrenLinkSearchComponent', () => {
  let component: ChildrenLinkSearchComponent;
  let fixture: ComponentFixture<ChildrenLinkSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenLinkSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenLinkSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
