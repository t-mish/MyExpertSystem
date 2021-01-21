import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Step} from "../../app.component";
import {State, Transition} from "../../model/transition";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {

  @Input() step: Step;

  @Output() nextTransition: EventEmitter<Transition> = new EventEmitter<Transition>();

  selectedAnswerIndex: number;

  constructor() { }

  onClicked() {
    this.nextTransition.emit(this.step.nextTransitions[this.selectedAnswerIndex]);
  }
}
