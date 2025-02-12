import { Component } from '@angular/core';
import { CommonModule, NgIf, NgSwitch } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

// Optional interface to define the shape of each diagnosis row
export interface DiagnosisData {
  code: string;
  description: string;
  complication: string;
  severity: string;
  notes: string;
  questions?: string[];
}

@Component({
  selector: 'app-diagnosis',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgIf,
    NgSwitch,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
  ],
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent {
  /**
   * Master list of available diagnoses (analogous to your "Tests" data).
   * You can rename or expand these fields as needed.
   */
  public data: DiagnosisData[] = [
    {
      code: 'D001',
      description: 'Diagnosis 1',
      complication: 'None',
      severity: 'Mild',
      notes: 'Check blood sugar regularly',
      questions: ['Any family history?', 'Recent hospital visits?']
    },
    {
      code: 'D002',
      description: 'Diagnosis 2',
      complication: 'Kidney issues',
      severity: 'Moderate',
      notes: 'Monitor potassium levels',
      questions: ['On any medications?', 'Do you experience fatigue?']
    },
    {
      code: 'D003',
      description: 'Diagnosis 3',
      complication: 'Hypertension',
      severity: 'Severe',
      notes: 'Requires immediate attention',
      questions: ['Blood pressure readings?', 'Daily salt intake?', 'Any chest pain?']
    },
    {
      code: 'D004',
      description: 'Diagnosis 4',
      complication: 'None',
      severity: 'Mild',
      notes: 'Annual check-up recommended'
      // No questions here
    },
  ];

  /** User-entered search text */
  public search: string = '';

  /**
   * Computed property for filtering: 
   * returns any diagnoses whose code, description, complication, severity, or notes match the search string.
   */
  public get filteredData(): DiagnosisData[] {
    if (!this.search) {
      return [];
    }
    const lower = this.search.toLowerCase();
    return this.data.filter(d =>
      d.code.toLowerCase().includes(lower) ||
      d.description.toLowerCase().includes(lower) ||
      d.complication.toLowerCase().includes(lower) ||
      d.severity.toLowerCase().includes(lower) ||
      d.notes.toLowerCase().includes(lower)
    );
  }

  /** List of diagnoses the user has selected for the second table */
  public selectedDiagnoses: DiagnosisData[] = [];

  /** Tracks which row is expanded in the "Selected Diagnoses" table */
  public expandedRow: string | null = null;

  /**
   * Column definitions for the "Matching Diagnoses" table
   * (similar to your Tests example).
   */
  public matchingColumns: string[] = [
    'code',
    'description',
    'complication',
    'severity',
    'notes'
  ];

  /**
   * Column definitions for the "Selected Diagnoses" table,
   * including an extra "questions" column for showing/hiding question details.
   */
  public selectedColumns: string[] = [
    'code',
    'description',
    'complication',
    'severity',
    'notes',
    'questions' // Button / text in this column will toggle the row expansion
  ];

  /**
   * Called when the user clicks on a row in the Matching Diagnoses table.
   * We prepend the clicked item to selectedDiagnoses if not already there,
   * then clear the search to hide the matching table.
   */
  public handleRowClick(item: DiagnosisData): void {
    const alreadySelected = this.selectedDiagnoses.some(d => d.code === item.code);
    if (!alreadySelected) {
      // Prepend the new item
      this.selectedDiagnoses = [item, ...this.selectedDiagnoses];
      this.search = ''; // Clear search

      // Optionally auto-expand the first item that has questions
      if (!this.expandedRow) {
        const firstWithQuestions = this.selectedDiagnoses.find(d => d.questions && d.questions.length > 0);
        if (firstWithQuestions) {
          this.expandedRow = firstWithQuestions.code;
        }
      }
    }
  }

  /**
   * Toggles expanded/collapsed state for a given row in the Selected Diagnoses table.
   */
  public toggleRowExpansion(code: string): void {
    this.expandedRow = (this.expandedRow === code) ? null : code;
  }

  /**
   * Check if a table row should be displayed as the "expanded detail" row.
   */
  public isRowExpanded(index: number, row: DiagnosisData): boolean {
    return row.code === this.expandedRow;
  }

  /**
   * Exactly like your Test example, we can randomly decide what input type to use for each question
   * (text, radio, checkbox, or select).
   */
  public getRandomInputType(question: string): string {
    const inputTypes = ['text', 'radio', 'checkbox', 'select'];
    const randomIndex = Math.floor(Math.random() * inputTypes.length);
    return inputTypes[randomIndex];
  }
}
