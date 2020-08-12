import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sw2Component } from './sw2.component';

describe('Sw2Component', () => {
  let component: Sw2Component;
  let fixture: ComponentFixture<Sw2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sw2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sw2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
