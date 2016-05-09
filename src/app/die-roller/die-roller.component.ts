import { Component, OnInit } from '@angular/core';
import * as tsroll from 'tsroll/tsroll'; 


@Component({
  moduleId: module.id,
  selector: 'die-roller-app',
  templateUrl: 'die-roller.component.html',
  styleUrls: ['die-roller.component.css']
})
export class DieRollerComponent implements OnInit {

  numberOf: number;
  sides = [2, 4, 6, 8, 10, 12, 20, 100];
  selectedSide: number;

  constructor() {}

  ngOnInit() {
    this.numberOf = 1;
    this.selectedSide = 20;
  }
  onSubmit(event) {
    console.log(this.numberOf);
    console.log(this.sides);
    console.log(this.selectedSide);
    // this line give me probs
    var dr = new tsroll.DiceRoller.Droll();
  }
}
