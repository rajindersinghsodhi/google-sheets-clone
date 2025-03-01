import { Component, QueryList, ViewChildren } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FileComponent } from "../spreadsheet-contols/file/file.component";
import { MatMenuTrigger } from '@angular/material/menu';
import { EditComponent } from "../spreadsheet-contols/edit/edit.component";
import { ViewComponent } from "../spreadsheet-contols/view/view.component";
import { InsertComponent } from "../spreadsheet-contols/insert/insert.component";
import { FormatComponent } from "../spreadsheet-contols/format/format.component";
import { DataComponent } from "../spreadsheet-contols/data/data.component";
import { ToolsComponent } from "../spreadsheet-contols/tools/tools.component";
import { ExtensionsComponent } from "../spreadsheet-contols/extensions/extensions.component";
import { HelpComponent } from "../spreadsheet-contols/help/help.component";

@Component({
  selector: 'app-header-spreadsheet',
  imports: [MatIconModule, FileComponent, EditComponent, ViewComponent, InsertComponent, FormatComponent, DataComponent, ToolsComponent, ExtensionsComponent, HelpComponent],
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
