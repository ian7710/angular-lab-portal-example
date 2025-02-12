import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { CommonModule, NgIf, NgSwitch } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Define the interface for table data
export interface TableData {
  code: string;
  description: string;
  fasting: string;
  abn: string;
  volume: string;
  jar: string;
  questions?: string[];
}

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    NgIf,
    NgSwitch,
    CommonModule,
    FormsModule,
    MatTableModule,],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
// Sample data, analogous to React's initialData
public data: TableData[] = [
  { code: '001', description: 'Item 1', fasting: 'Yes', abn: 'ABN123', volume: '100ml', jar: 'Jar 1', questions: ['Question 1A', 'Question 1B'] },
  { code: '002', description: 'Item 2', fasting: 'No', abn: 'ABN456', volume: '150ml', jar: 'Jar 2', questions: ['Question 2A'] },
  { code: '003', description: 'Item 3', fasting: 'Yes', abn: 'ABN789', volume: '200ml', jar: 'Jar 3', questions: ['Question 3A', 'Question 3B', 'Question 3C'] },
  { code: '004', description: 'Item 4', fasting: 'No', abn: 'ABN012', volume: '250ml', jar: 'Jar 4' }, // No questions for this item
];

// Search text
public search = '';

// Filtered results (can also be done via a getter)
public get filteredData(): TableData[] {
  if (!this.search) {
    return [];
  }
  const lowerSearch = this.search.toLowerCase();
  return this.data.filter(item =>
    item.code.toLowerCase().includes(lowerSearch) ||
    item.description.toLowerCase().includes(lowerSearch) ||
    item.fasting.toLowerCase().includes(lowerSearch) ||
    item.abn.toLowerCase().includes(lowerSearch) ||
    item.volume.toLowerCase().includes(lowerSearch) ||
    item.jar.toLowerCase().includes(lowerSearch)
  );
}

// Selected tests for the second table
public selectedTests: TableData[] = [];

// Expanded row tracking
public expandedRow: string | null = null;

// Columns for the "Matching Tests" table
public matchingColumns: string[] = ['code', 'description', 'fasting', 'abn', 'volume', 'jar'];

// Columns for the "Selected Tests" table
public selectedColumns: string[] = ['code', 'description', 'fasting', 'abn', 'volume', 'jar', 'questions'];

constructor() {}

ngOnInit(): void {}

// Handle row click from "Matching Tests"
public handleRowClick(item: TableData): void {
  // If not already selected, prepend it to the selected list
  if (!this.selectedTests.some(test => test.code === item.code)) {
    this.selectedTests = [item, ...this.selectedTests];
    this.search = ''; // Clear the search

    // Automatically expand if this is the first selected with questions
    if (!this.expandedRow) {
      const firstWithQuestions = this.selectedTests.find(test => test.questions && test.questions.length > 0);
      if (firstWithQuestions) {
        this.expandedRow = firstWithQuestions.code;
      }
    }
  }
}

// Toggle expansion on selected test row
public toggleRowExpansion(code: string): void {
  this.expandedRow = this.expandedRow === code ? null : code;
}

// Generate a random input type
public getRandomInputType(question: string): string {
  const inputTypes = ['text', 'radio', 'checkbox', 'select'];
  const randomIndex = Math.floor(Math.random() * inputTypes.length);
  return inputTypes[randomIndex];
}

public isRowExpanded(index: number, row: any): boolean {
  return row.code === this.expandedRow;
}


}
