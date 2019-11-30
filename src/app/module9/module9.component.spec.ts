import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module9Component } from './module9.component';

describe('Module9Component', () => {
  let component: Module9Component;
  let fixture: ComponentFixture<Module9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
