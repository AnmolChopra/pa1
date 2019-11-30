import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module12Component } from './module12.component';

describe('Module12Component', () => {
  let component: Module12Component;
  let fixture: ComponentFixture<Module12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
