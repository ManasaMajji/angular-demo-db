import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorFormComponent } from './calculator-form.component';

describe('CalculatorFormComponent', () => {
  let component: CalculatorFormComponent;
  let fixture: ComponentFixture<CalculatorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should check if calculator form exists', () => {
    // const form = component.calculatorForm;
    const form =
      fixture.debugElement.nativeElement.querySelector('#calculatorForm');
    expect(form).toBeDefined();
  });

  it('should check if form has two input controls', () => {
    const form =
      fixture.debugElement.nativeElement.querySelector('#calculatorForm');
    const inputElements = form.querySelectorAll('input');
    expect(inputElements.length).toEqual(2);
  });

  it('should set form to invalid if input fields are empty', () => {
    const form = component.calculatorForm;
    expect(form.invalid).toBeTruthy();
  });

  it('should set form to valid if all the required input fields have value', () => {
    const form = component.calculatorForm;
    form.setValue({
      firstinput: 24,
      secondinput: 12,
    });
    expect(form.valid).toBeTruthy();
  });

  it('should calculate division of two numbers and assign to result', () => {
    const form = component.calculatorForm;
    form.setValue({
      firstinput: 24,
      secondinput: 12,
    });
    expect(component.result).toEqual(2);
  });
});
