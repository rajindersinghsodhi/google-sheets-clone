import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadsheetBodyComponent } from './spreadsheet-body.component';

describe('SpreadsheetBodyComponent', () => {
  let component: SpreadsheetBodyComponent;
  let fixture: ComponentFixture<SpreadsheetBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpreadsheetBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpreadsheetBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
