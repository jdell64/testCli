import { Component, OnInit } from '@angular/core';
// import * as tsroll from 'tsroll/tsroll'; 
import {DiceRoller} from 'tsroll/tsroll';
import { MdButton } from '@angular2-material/button'
import { MdInput} from '@angular2-material/input'
// import { MdLayout } from '@angular2-material/core'
// @Component({
//   selector: 'md-button',
//   directives: [MdButton]
// })

@Component({
  moduleId: module.id,
  selector: 'die-roller-app',
  templateUrl: 'die-roller.component.html',
  styleUrls: ['die-roller.component.css'],
  directives: [MdButton, MdInput]
})
export class DieRollerComponent implements OnInit {

  numberOf: number;
  sides = [2, 4, 6, 8, 10, 12, 20, 100];
  selectedSide: number;
  modifier: number;
  answer: string;
  // TODO: add formula to material list
  formula: string;
  private result: DiceRoller.DrollResult;

  constructor() { }

  ngOnInit() {
    this.numberOf = 1;
    this.selectedSide = 20;
    this.modifier = 0;
    this.answer = "";
    this.formula = "";
  }
  onSubmit(event) {
    // console.log(this.numberOf);
    // console.log(this.sides);
    // console.log(this.selectedSide);
    // this line give me probs
    // var droll = DiceRoller.Droll

    var dr = new DiceRoller.Droll();
    this.result = dr.roll(this.numberOf + "d" + this.selectedSide + "+" + this.modifier);
    console.log(this.result.total.toString());
    this.formula = this.result.rolls + " + " + this.result.modifier + " = " + this.result.total
    // this.formula = this.result.toString();
    this.answer = this.result.total.toString();
  }
}
