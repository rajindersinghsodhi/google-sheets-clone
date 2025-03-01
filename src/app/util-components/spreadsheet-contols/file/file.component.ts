import { Component, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-file',
  imports: [MatMenuModule],
  templateUrl: './file.component.html',
  styleUrl: './file.component.css'
})
export class FileComponent {
  @Input() menuTitle = '';
}
