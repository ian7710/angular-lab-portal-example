import {Component, inject} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { PatientInformationComponent } from '../patient-information/patient-information.component';
import { OrderInformationBarComponent } from '../order-information-bar/order-information-bar.component';

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
    PatientInformationComponent,
    OrderInformationBarComponent
  ],
})
export class StepperOverviewExample {
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
}
