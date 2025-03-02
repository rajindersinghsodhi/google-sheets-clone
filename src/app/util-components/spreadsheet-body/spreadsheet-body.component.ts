import { CommonModule } from '@angular/common';
import { Component, SimpleChange } from '@angular/core';
import { SharedService } from '../../services/shared.service';

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

  constructor(
    private shared: SharedService
  ){

  }

  ngAfterViewInit(){
    this.cellElements = document.querySelectorAll('.cell');
  }

  ngOnChange(cellElements: SimpleChange ){
    // console.log("simple change called");
  }
  
  
  ngAfterViewChecked(){
    // console.log(this.selectedCellIndex)
    // console.log("view cheked")
  }

  handleKeydown(event: KeyboardEvent, rowIndex: number, colIndex: number) {
    console.log(rowIndex)
    console.log(colIndex)
    let newRow = rowIndex;
    let newCol = colIndex;
    switch (event.key) {
      case "ArrowRight":
        if (colIndex + 1 < this.totalCols){
          newCol++
        }else{
          const lastChar = this.columns[this.columns.length - 1]
          const newCharCode = lastChar.charCodeAt(0) + 1;
          const newChar = String.fromCharCode(newCharCode);
          this.columns.push(newChar)
          this.rows.forEach(row => row.push(''));
          this.totalCols = this.columns.length;
          newCol++;
        }
        break;
      case "ArrowLeft":
        if (colIndex > 0) newCol--;
        break;
      case "ArrowDown":
        if (rowIndex + 1 < this.totalRows){
          newRow++
        }else{
          const newRowArray = new Array(this.columns.length).fill('');
          this.rows.push(newRowArray);
          this.totalRows = this.rows.length;
        };
        break;
      case "ArrowUp":
        if (rowIndex > 0) newRow--;
        break;
    }

    const cellInfo = this.columns[newCol] + (newRow+1);
    this.shared.updateCellInfo(cellInfo)
    this.focusCell(newRow, newCol);
  }

  handleClick(rowIndex: number, colIndex: number){
    this.selectedCellIndex = rowIndex * this.totalCols + colIndex;
    const cellInfo = this.columns[colIndex] + (rowIndex+1);
    this.shared.updateCellInfo(cellInfo)
  }

  focusCell(rowIndex: number, colIndex: number) {
    
    const cellElements = document.querySelectorAll('.cell') as NodeListOf<HTMLElement>;
    
    this.selectedCellIndex = rowIndex * this.columns.length + colIndex;
    if (cellElements[this.selectedCellIndex]) {
      cellElements[this.selectedCellIndex].focus();
    }
  }
}
