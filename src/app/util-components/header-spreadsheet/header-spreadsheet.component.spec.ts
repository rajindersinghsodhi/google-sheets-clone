import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSpreadsheetComponent } from './header-spreadsheet.component';

describe('HeaderSpreadsheetComponent', () => {
  let component: HeaderSpreadsheetComponent;
  let fixture: ComponentFixture<HeaderSpreadsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSpreadsheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSpreadsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
