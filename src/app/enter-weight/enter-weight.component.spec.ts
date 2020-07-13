import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterWeightComponent } from './enter-weight.component';

describe('EnterWeightComponent', () => {
  let component: EnterWeightComponent;
  let fixture: ComponentFixture<EnterWeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterWeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
