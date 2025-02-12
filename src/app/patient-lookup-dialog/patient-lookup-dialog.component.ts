import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-patient-lookup-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatDialogContent,
    MatDialogActions,
    
  ],
  templateUrl: './patient-lookup-dialog.component.html',
  styleUrl: './patient-lookup-dialog.component.scss'
})
export class PatientLookupDialogComponent {
  searchTerm = '';
  displayedColumns: string[] = ['name', 'action'];

  // Mock patient data
  allPatients = [
    { id: 1, name: 'John Smith', dob: '01/01/1980' },
    { id: 2, name: 'Jane Doe', dob: '02/14/1975' },
    { id: 3, name: 'Alice Brown', dob: '07/07/1990' },
    // ... etc.
  ];
  filteredPatients = [...this.allPatients];

  constructor(
    private dialogRef: MatDialogRef<PatientLookupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSearch() {
    const term = this.searchTerm.toLowerCase();
    this.filteredPatients = this.allPatients.filter(
      p => p.name.toLowerCase().includes(term)
    );
  }

  selectPatient(patient: any) {
    // Pass the selected patient back to the caller
    this.dialogRef.close(patient);
  }

  onClose() {
    this.dialogRef.close();
  }
}
