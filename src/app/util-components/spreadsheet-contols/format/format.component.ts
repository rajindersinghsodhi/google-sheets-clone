import { Component, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-format',
  imports: [MatMenuModule],
  templateUrl: './format.component.html',
  styleUrl: './format.component.css'
})
export class FormatComponent {
  @Input() menuTitle = '';
}
