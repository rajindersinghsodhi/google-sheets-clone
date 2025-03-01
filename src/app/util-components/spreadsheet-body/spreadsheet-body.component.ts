import { CommonModule } from '@angular/common';
import { Component, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-spreadsheet-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spreadsheet-body.component.html',
  styleUrl: './spreadsheet-body.component.css'
})
export class SpreadsheetBodyComponent {
  columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N']; // Unique column names
  rows = Array.from({ length: 20 }, () => Array(this.columns.length).fill(''));
  totalRows = this.rows.length;
  totalCols = this.columns.length; // 20 rows, dynamic column count
  cellElements: any;
  selectedCellIndex: number = 0;

  ngAfterViewInit(){
    console.log("view init called");
    this.cellElements = document.querySelectorAll('.cell');
    console.log(this.cellElements)
  }

  ngOnChange(cellElements: SimpleChange ){
    console.log("simple change called");
  }
  
  
  ngAfterViewChecked(){
    console.log(this.selectedCellIndex)
    console.log("view cheked")
  }

  handleKeydown(event: KeyboardEvent, rowIndex: number, colIndex: number) {

    let newRow = rowIndex;
    let newCol = colIndex;

    switch (event.key) {
      case "ArrowRight":
        if (colIndex + 1 < this.totalCols) newCol++;
        break;
      case "ArrowLeft":
        if (colIndex > 0) newCol--;
        break;
      case "ArrowDown":
        if (rowIndex + 1 < this.totalRows) newRow++;
        break;
      case "ArrowUp":
        if (rowIndex > 0) newRow--;
        break;
    }

    this.focusCell(newRow, newCol);
  }

  focusCell(rowIndex: number, colIndex: number) {
    
    const cellElements = document.querySelectorAll('.cell') as NodeListOf<HTMLElement>;
    
    this.selectedCellIndex = rowIndex * this.columns.length + colIndex;
    if (cellElements[this.selectedCellIndex]) {
      cellElements[this.selectedCellIndex].focus();
    }
  }
}
