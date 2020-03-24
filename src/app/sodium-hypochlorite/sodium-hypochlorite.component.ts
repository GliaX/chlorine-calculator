import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sodium-hypochlorite',
  templateUrl: './sodium-hypochlorite.component.html',
  styleUrls: ['./sodium-hypochlorite.component.sass']
})
export class SodiumHypochloriteComponent implements OnInit {
  ppm: 0;
  concentration: 0;

  constructor() { }

  ngOnInit(): void {
  }

}
