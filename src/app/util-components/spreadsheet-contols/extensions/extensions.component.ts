import { Component, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-extensions',
  imports: [MatMenuModule],
  templateUrl: './extensions.component.html',
  styleUrl: './extensions.component.css'
})
export class ExtensionsComponent {
  @Input() menuTitle = '';
}
