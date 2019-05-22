import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizComponent } from './horiz.component';

describe('HorizComponent', () => {
  let component: HorizComponent;
  let fixture: ComponentFixture<HorizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
