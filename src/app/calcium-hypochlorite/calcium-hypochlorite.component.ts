import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//import { Calcium } from './calcium-chlorite.model';

@Component({
  selector: 'app-calcium-hypochlorite',
  templateUrl: './calcium-hypochlorite.component.html',
  styleUrls: ['./calcium-hypochlorite.component.sass']
})
export class CalciumHypochloriteComponent implements OnInit {
  ppm: 0;
  concentration: 0;

  constructor() { }

  ngOnInit(): void {
  }
}
