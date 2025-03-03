import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    protected router: Router
  ){}

  navigateToSpreadsheet() {
    this.router.navigate(['/spreadsheet']);
  }
}
