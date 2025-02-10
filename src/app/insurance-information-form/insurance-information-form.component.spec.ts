import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceInformationFormComponent } from './insurance-information-form.component';

describe('InsuranceInformationFormComponent', () => {
  let component: InsuranceInformationFormComponent;
  let fixture: ComponentFixture<InsuranceInformationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceInformationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
