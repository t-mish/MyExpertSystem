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
  @Input() currentStepIndex: number;

  @Output() selectedAnswerIndexEmitter: EventEmitter<number> = new EventEmitter<number>();

  selectedAnswerIndex: number;

  constructor() { }

  onClicked() {
    this.selectedAnswerIndexEmitter.emit(this.selectedAnswerIndex);
  }
}
