import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SodiumHypochloriteComponent } from './sodium-chlorite.component';

describe('SodiumHypochloriteComponent', () => {
  let component: SodiumHypochloriteComponent;
  let fixture: ComponentFixture<SodiumHypochloriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SodiumHypochloriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SodiumHypochloriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
