import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ButtonComponent } from './components/button/button.component';
import { DateTimePickerComponent } from './components/date-time-picker/date-time-picker.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FormFieldsComponent } from './components/form-fields/form-fields.component';
import { LookupComponent } from './components/lookup/lookup.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TextInputComponent } from './components/text-input/text-input.component';

// Components


@NgModule({
  declarations: [
    NavigationComponent,
    MenuComponent,
    ButtonComponent,
    FormFieldsComponent,
    TextInputComponent,
    DateTimePickerComponent,
    DropdownComponent,
    LookupComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatTooltipModule
  ],
  exports: [
    NavigationComponent,
    MenuComponent,
    ButtonComponent,
    FormFieldsComponent,
    TextInputComponent,
    DateTimePickerComponent,
    DropdownComponent,
    LookupComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatTooltipModule
  ]
})
export class SharedModule { }
