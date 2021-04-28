import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChooseComponent } from './page-choose.component';

describe('PageChooseComponent', () => {
  let component: PageChooseComponent;
  let fixture: ComponentFixture<PageChooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageChooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
