import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserweightdataComponent } from './userweightdata.component';

describe('UserweightdataComponent', () => {
  let component: UserweightdataComponent;
  let fixture: ComponentFixture<UserweightdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserweightdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserweightdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
