import { Component } from '@angular/core';
import { HeaderSpreadsheetComponent } from "../../util-components/header-spreadsheet/header-spreadsheet.component";
import { ControlsSpreadsheetComponent } from "../../util-components/controls-spreadsheet/controls-spreadsheet.component";
import { SpreadsheetBodyComponent } from "../../util-components/spreadsheet-body/spreadsheet-body.component";
import { FormulaComponentComponent } from "../../util-components/formula-component/formula-component.component";

@Component({
  selector: 'app-spreadsheet',
  imports: [HeaderSpreadsheetComponent, ControlsSpreadsheetComponent, SpreadsheetBodyComponent, FormulaComponentComponent],
  templateUrl: './spreadsheet.component.html',
  styleUrl: './spreadsheet.component.css'
})
export class SpreadsheetComponent {
  
}
