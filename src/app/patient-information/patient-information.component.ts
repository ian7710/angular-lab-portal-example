import { NgIf } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SsnMaskDirective } from '../ssn-mask.directive';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { PhoneMaskDirective } from '../phone-mask.directive';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { PhoneNumberDirective } from '../ssn-mask-two.directive';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { ValidDateDirective } from '../date-mask.directive';
import { MatStepper } from '@angular/material/stepper';



@Component({
  standalone: true,
  imports:[FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    PhoneNumberDirective,
    ValidDateDirective,
    MatCardModule,
    MatSelectModule,
  NgIf,SsnMaskDirective, MatToolbarModule, MatMenuModule, MatDividerModule, MatIconModule, PhoneMaskDirective, MatDatepickerModule, MatNativeDateModule, MatSidenavModule],
  selector: 'app-patient-information',
  templateUrl: './patient-information.component.html',
  styleUrls: ['./patient-information.component.scss'],
  providers: [], // Correct way to provide ngx-mask
  encapsulation: ViewEncapsulation.None
})
export class PatientInformationComponent implements OnInit {

  // Add an Input property for the stepper
  @Input()
  stepper!: MatStepper;

  patientForm: FormGroup;

  // Example dropdown lists
  races: string[] = ['American Indian or Alaska Native','Asian','Black or African American','White','Other'];
  states: string[] = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','...'];

  constructor(private fb: FormBuilder) {
    this.patientForm = this.fb.group({
      // Make all fields required
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      ssn: ['', Validators.required],
      race: ['', Validators.required],
      ethnicity: ['', Validators.required],
      hospitalMrn: ['', Validators.required],
      practiceId: ['', Validators.required],
      billingType: ['', Validators.required],
      cellPhone: ['', Validators.required],
      homePhone: ['', Validators.required],
      email: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required]
    });
  }

  hasRequiredError(controlName: string): boolean {
    const control = this.patientForm.get(controlName);
    return !!control && control.hasError('required') && control.touched;
  }

  // * Save form on submit and navigate to the next step
  onSave() {
    // Mark all controls as touched so errors show
    this.patientForm.markAllAsTouched();

    if (this.patientForm.valid) {
      // Submit form data or handle successful validation
      console.log('Form Submitted:', this.patientForm.value);
      this.stepper.next();
    } else {
      console.log('Form Invalid');
    }
  }

  onCancel() {
    // Handle cancel action (reset form, navigate away, etc.)
    this.patientForm.reset();
  }

  // Moves the user to the previous step in the stepper
  onPrevious() {
    // * Just call the stepper's previous() method
    this.stepper.previous()
  }

  // #TODO Will add function for this button later
  onHold() {
    console.log('Form on hold...')
  }


  puserForm!: FormGroup;
  ssnValue: string | null = '';
  phoneValue: string | null = '';
  userForm: any;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      ssn: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{3}-\d{2}-\d{4}$/) // Ensures SSN format (XXX-XX-XXXX)
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\(\d{3}\) \d{3}-\d{4}$/) // Ensures phone format (XXX) XXX-XXXX
      ]),
      street: new FormControl('', [Validators.required]), // ✅ Added missing control
      city: new FormControl('', [Validators.required]), // ✅ Added missing control
      state: new FormControl('', [Validators.required]), // ✅ Added missing control
      zip: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{5}(-\d{4})?$/) // Ensures ZIP Code format (12345 or 12345-6789)
      ]), // ✅ Added missing control
      comments: new FormControl('', [
        Validators.required,
        Validators.maxLength(500)
      ]),
      date: new FormControl('', [
        Validators.required,
        Validators.min(new Date(1900, 0, 1).getTime()), // Ensures date is after Jan 1, 1900
        Validators.max(new Date(2100, 11, 31).getTime()) // Ensures date is before Dec 31, 2100
      ])
    });
  }

  submitForm() {
    if (this.userForm.valid) {
      this.ssnValue = this.userForm.value.ssn;
      this.phoneValue = this.userForm.value.phone;
      console.log("Submitted SSN:", this.ssnValue);
      console.log("Submitted Phone:", this.phoneValue);
    }
  }
}

function ViewChild(arg0: string): (target: PatientInformationComponent, propertyKey: "sidenav") => void {
  throw new Error('Function not implemented.');
}

