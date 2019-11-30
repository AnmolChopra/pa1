import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module13Component } from './module13.component';

describe('Module13Component', () => {
  let component: Module13Component;
  let fixture: ComponentFixture<Module13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
