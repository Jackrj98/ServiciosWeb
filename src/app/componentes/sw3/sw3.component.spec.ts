import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sw3Component } from './sw3.component';

describe('Sw3Component', () => {
  let component: Sw3Component;
  let fixture: ComponentFixture<Sw3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sw3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sw3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
