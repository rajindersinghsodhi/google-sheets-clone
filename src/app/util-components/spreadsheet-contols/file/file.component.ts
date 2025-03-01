import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-file',
  imports: [MatMenuModule, MatIconModule, MatDividerModule],
  templateUrl: './file.component.html',
  styleUrl: './file.component.css'
})
export class FileComponent {
  @Input() menuTitle = '';
}
