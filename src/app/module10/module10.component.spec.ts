import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module10Component } from './module10.component';

describe('Module10Component', () => {
  let component: Module10Component;
  let fixture: ComponentFixture<Module10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
