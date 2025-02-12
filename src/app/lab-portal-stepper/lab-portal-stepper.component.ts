import {Component, inject, ViewEncapsulation} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { PatientInformationComponent } from '../patient-information/patient-information.component';
import { OrderInformationBarComponent } from '../order-information-bar/order-information-bar.component';
import { InsuranceInformationFormComponent } from '../insurance-information-form/insurance-information-form.component';
import { GuarantorInformationFormComponent } from '../guarantor-information-form/guarantor-information-form.component';
import { GeneralInformationFormComponent } from '../general-information-form/general-information-form.component';
import { TestComponent } from '../test/test.component';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'stepper-overview-example',
  standalone: true,
  templateUrl: 'lab-portal-stepper.component.html',
  styleUrl: 'lab-portal-stepper.component.scss',
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    GeneralInformationFormComponent,
    PatientInformationComponent,
    OrderInformationBarComponent,
    InsuranceInformationFormComponent,
    GuarantorInformationFormComponent,
    TestComponent,
  ],
  encapsulation: ViewEncapsulation.None
})
export class StepperOverviewExample {
  private _formBuilder = inject(FormBuilder);

  // Adding these to the step control removes the icon that replaces the number on the step control
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  isLinear = false;
}
