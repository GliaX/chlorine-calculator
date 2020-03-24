import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalciumHypochloriteComponent } from './calcium-chlorite.component';

describe('CalciumHypochloriteComponent', () => {
  let component: CalciumHypochloriteComponent;
  let fixture: ComponentFixture<CalciumHypochloriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalciumHypochloriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalciumHypochloriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
