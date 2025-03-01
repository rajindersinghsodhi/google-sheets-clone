import { Component, QueryList, ViewChildren } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FileComponent } from "../spreadsheet-contols/file/file.component";
import { MatMenuTrigger } from '@angular/material/menu';
import { EditComponent } from "../spreadsheet-contols/edit/edit.component";

@Component({
  selector: 'app-header-spreadsheet',
  imports: [MatIconModule, FileComponent, EditComponent],
  templateUrl: './header-spreadsheet.component.html',
  styleUrl: './header-spreadsheet.component.css'
})
export class HeaderSpreadsheetComponent {
  @ViewChildren(MatMenuTrigger) menuTriggers!: QueryList<MatMenuTrigger>;

  openMenu(menuName: string) {
    const trigger = this.menuTriggers.find((menu) => menu.menu?.panelId === menuName);
    if (trigger) {
      trigger.openMenu();
    }
  }
}
