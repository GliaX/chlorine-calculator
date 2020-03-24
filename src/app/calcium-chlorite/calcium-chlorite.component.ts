import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Calcium } from './calcium-chlorite.model';

@Component({
  selector: 'app-calcium-chlorite',
  templateUrl: './calcium-chlorite.component.html',
  styleUrls: ['./calcium-chlorite.component.sass']
})
export class CalciumChloriteComponent implements OnInit {
  calcium: Calcium;

  constructor() { }

  ngOnInit(): void {
  }

  onCalciumCalculate(form: NgForm) {
    if (form.invalid) {
      return;
    }
  }
}
