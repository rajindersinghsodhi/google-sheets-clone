import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsSpreadsheetComponent } from './controls-spreadsheet.component';

describe('ControlsSpreadsheetComponent', () => {
  let component: ControlsSpreadsheetComponent;
  let fixture: ComponentFixture<ControlsSpreadsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlsSpreadsheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlsSpreadsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
