import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenCategoryLinkComponent } from './children-category-link.component';

describe('ChildrenCategoryLinkComponent', () => {
  let component: ChildrenCategoryLinkComponent;
  let fixture: ComponentFixture<ChildrenCategoryLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenCategoryLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenCategoryLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
