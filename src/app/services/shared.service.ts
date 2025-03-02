import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private cellInfoSubject = new BehaviorSubject<string>('A1')
  cellInfo$ = this.cellInfoSubject.asObservable();

  constructor() { }

  updateCellInfo(cellRow: string){
    this.cellInfoSubject.next(cellRow);
  }

}
