import { Component, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-format',
  imports: [MatMenuModule, MatIconModule, MatDividerModule],
  templateUrl: './format.component.html',
  styleUrl: './format.component.css'
})
export class FormatComponent {
  @Input() menuTitle = '';
}
