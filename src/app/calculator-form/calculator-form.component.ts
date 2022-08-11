import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss'],
})
export class CalculatorFormComponent implements OnInit {
  calculatorForm: FormGroup;
  result: number = 0;

  constructor() {}

  ngOnInit() {
    this.calculatorForm = this.createFormGroup();

    this.calculatorForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe((value) => {
        if (this.calculatorForm.valid) {
          const firstNum = (value && value.firstinput) || 0;
          const secondNum = (value && value.secondinput) || 0;
          this.result = firstNum / secondNum;
        }
      });
  }

  createFormGroup() {
    return (this.calculatorForm = new FormGroup({
      firstinput: new FormControl(null, Validators.required),
      secondinput: new FormControl(null, Validators.required),
    }));
  }
}
