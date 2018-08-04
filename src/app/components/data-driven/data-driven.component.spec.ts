import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDrivenComponent } from './data-driven.component';

describe('DataDrivenComponent', () => {
  let component: DataDrivenComponent;
  let fixture: ComponentFixture<DataDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
