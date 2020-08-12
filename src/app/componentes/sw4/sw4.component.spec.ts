import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sw4Component } from './sw4.component';

describe('Sw4Component', () => {
  let component: Sw4Component;
  let fixture: ComponentFixture<Sw4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sw4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sw4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
