import { Routes } from '@angular/router';
import { SpreadsheetComponent } from './components/spreadsheet/spreadsheet.component';

export const routes: Routes = [
    {path: 'spreadsheet/:spreadsheetId', component: SpreadsheetComponent}
];
