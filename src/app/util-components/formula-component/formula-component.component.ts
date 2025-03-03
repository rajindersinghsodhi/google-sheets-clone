import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-formula-component',
  imports: [MatIconModule],
  templateUrl: './formula-component.component.html',
  styleUrl: './formula-component.component.css'
})
export class FormulaComponentComponent {
  cellInfo: string = 'A1';
  constructor(
    protected shared: SharedService
  ){

  }

  ngAfterViewChecked(){
    // console.log("called")
    this.shared.cellInfo$.subscribe((data) => {
      this.cellInfo = data;
    });
    // console.log(this.cellInfo)
  }
}
