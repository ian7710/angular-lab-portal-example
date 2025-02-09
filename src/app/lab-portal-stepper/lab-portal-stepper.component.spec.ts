import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperOverviewExample } from './lab-portal-stepper.component';

describe('StepperOverviewExample', () => {
  let component: StepperOverviewExample;
  let fixture: ComponentFixture<StepperOverviewExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperOverviewExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperOverviewExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
