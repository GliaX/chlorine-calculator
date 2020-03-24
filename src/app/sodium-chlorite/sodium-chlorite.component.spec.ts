import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SodiumChloriteComponent } from './sodium-chlorite.component';

describe('SodiumChloriteComponent', () => {
  let component: SodiumChloriteComponent;
  let fixture: ComponentFixture<SodiumChloriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SodiumChloriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SodiumChloriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
