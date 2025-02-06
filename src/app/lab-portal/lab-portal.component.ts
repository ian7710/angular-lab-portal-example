import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
import { DateOnlyDirective } from '../date-mask.directive';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { PhoneNumberDirective } from '../ssn-mask-two.directive';



@Component({
  standalone: true,
  imports:[FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    PhoneNumberDirective,
  NgIf,SsnMaskDirective, MatToolbarModule, MatMenuModule, MatDividerModule, MatIconModule, PhoneMaskDirective, MatDatepickerModule, MatNativeDateModule, DateOnlyDirective, MatSidenavModule],
  selector: 'app-lab-portal',
  templateUrl: './lab-portal.component.html',
  styleUrls: ['./lab-portal.component.scss'],
  providers: [], // Correct way to provide ngx-mask
})
export class LabPortalComponent implements OnInit {


  puserForm!: FormGroup;
  ssnValue: string | null = '';
  phoneValue: string | null = '';
  userForm: any;

  constructor() {}

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

function ViewChild(arg0: string): (target: LabPortalComponent, propertyKey: "sidenav") => void {
  throw new Error('Function not implemented.');
}

