import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-spreadsheet-body',
  imports: [CommonModule],
  templateUrl: './spreadsheet-body.component.html',
  styleUrl: './spreadsheet-body.component.css'
})
export class SpreadsheetBodyComponent {
  columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'E', 'F', 'G', 'H', 'E', 'F']; // Change as needed
  rows = Array.from({ length: 20 }, () => Array(14).fill('')); // 10 rows, 5 columns
}
