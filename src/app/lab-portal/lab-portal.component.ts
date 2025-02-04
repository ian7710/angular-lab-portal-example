import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideNgxMask } from 'ngx-mask';
import { SsnMaskDirective } from '../ssn-mask.directive';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { PhoneMaskDirective } from '../phone-mask.directive';



@Component({
  standalone: true,
  imports:[FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  NgIf,SsnMaskDirective, MatToolbarModule, MatMenuModule, MatDividerModule, MatIconModule, PhoneMaskDirective],
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
      ssn: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required])
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

