import { Routes } from '@angular/router';
import { SpreadsheetComponent } from './components/spreadsheet/spreadsheet.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: 'spreadsheet', component: SpreadsheetComponent},
    {path: '', component: HomeComponent}
];
