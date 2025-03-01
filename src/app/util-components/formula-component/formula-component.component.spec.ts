import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaComponentComponent } from './formula-component.component';

describe('FormulaComponentComponent', () => {
  let component: FormulaComponentComponent;
  let fixture: ComponentFixture<FormulaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
