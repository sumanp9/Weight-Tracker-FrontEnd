import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerApplicationComponent } from './tracker-application.component';

describe('TrackerApplicationComponent', () => {
  let component: TrackerApplicationComponent;
  let fixture: ComponentFixture<TrackerApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
