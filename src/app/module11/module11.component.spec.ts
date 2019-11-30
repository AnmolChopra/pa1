import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module11Component } from './module11.component';

describe('Module11Component', () => {
  let component: Module11Component;
  let fixture: ComponentFixture<Module11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
