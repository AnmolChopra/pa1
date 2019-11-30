import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCourseComponent } from './the-course.component';

describe('TheCourseComponent', () => {
  let component: TheCourseComponent;
  let fixture: ComponentFixture<TheCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
