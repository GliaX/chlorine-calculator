import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalciumChloriteComponent } from './calcium-chlorite.component';

describe('CalciumChloriteComponent', () => {
  let component: CalciumChloriteComponent;
  let fixture: ComponentFixture<CalciumChloriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalciumChloriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalciumChloriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
