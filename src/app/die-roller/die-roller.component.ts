import { Component, OnInit } from '@angular/core';
import { DiceRoller } from 'tsroll/tsroll';
import { MdButton } from '@angular2-material/button'
import { MdInput} from '@angular2-material/input'
import { MdCheckbox } from '@angular2-material/checkbox'

// mdIcon does not work ATM
// import { MdIcon } from '@angular2-material/icon'

@Component({
  moduleId: module.id,
  selector: 'die-roller-app',
  templateUrl: 'die-roller.component.html',
  styleUrls: ['die-roller.component.css'],
  directives: [MdButton, MdInput, MdCheckbox]
})
export class DieRollerComponent implements OnInit {

  numberOf: number;
  sides = [2, 4, 6, 8, 10, 12, 20, 100];
  selectedSide: number;
  modifier: number;
  answer: string;
  rolls: string;

  crit: boolean;
  twentyIsCrit: boolean;
  oneIsCrit: boolean;

  // toastr settings
  toastrTitle: string;
  toastrIcon: string;
  toastrMessage: string;
  toastrClass: string;

  private result: DiceRoller.DrollResult;

  constructor() { }

  ngOnInit() {
    this.numberOf = 1;
    this.selectedSide = 20;
    this.modifier = 0;
    this.answer = "";
    this.rolls = "";
    this.crit = false;
    this.twentyIsCrit = true;
    this.oneIsCrit = true;
    this.toastrClass = "toastrNeutral";
  }

  onSubmit(event) {
    var dr = new DiceRoller.Droll();
    this.result = dr.roll(this.numberOf + "d" + this.selectedSide + "+" + this.modifier);
    // console.log(this.result.total.toString());
    this.rolls = this.result.rolls.join(', ')
    this.answer = this.result.total.toString();


    if (this.selectedSide == 20) {
      if (this.twentyIsCrit && this.result.rolls.length == 1 && this.result.rolls[0] == 20) {
        this.toastrIcon = 'done';
        this.toastrTitle = 'Critical Success'
        this.toastrMessage = 'Yay!'
        this.crit = true;
        this.toastrClass = "toastrSuccess";
        // console.log('crit hit');

        // hide after 3 seconds
        setTimeout(function () {
          this.crit = false;
          //  console.log(this.edited);
        }.bind(this), 3000);
      } else if (this.oneIsCrit && this.result.rolls.length == 1 && this.result.rolls[0] == 1) {
        this.toastrIcon = 'warning'
        this.toastrTitle = 'Critical Failure!'
        this.toastrMessage = 'Womp womp :( !'
        // console.log('crit miss');
        this.crit = true;
        this.toastrClass = "toastrFail";
        // hide after 3 seconds
        setTimeout(function () {
          this.crit = false;
          //  console.log(this.edited);
        }.bind(this), 3000);
      }


    }

  }
}
