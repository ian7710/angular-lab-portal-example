import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarantorInformationFormComponent } from './guarantor-information-form.component';

describe('GuarantorInformationFormComponent', () => {
  let component: GuarantorInformationFormComponent;
  let fixture: ComponentFixture<GuarantorInformationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuarantorInformationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuarantorInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
