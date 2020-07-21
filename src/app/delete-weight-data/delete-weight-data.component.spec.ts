import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWeightDataComponent } from './delete-weight-data.component';

describe('DeleteWeightDataComponent', () => {
  let component: DeleteWeightDataComponent;
  let fixture: ComponentFixture<DeleteWeightDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteWeightDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWeightDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
