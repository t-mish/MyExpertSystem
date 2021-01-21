import {Component, OnInit} from '@angular/core';
import {State, Transition} from "./model/transition";
import {TransitionService} from "./service/transition.service";
import * as _ from "underscore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private transitions: Transition[];
  steps: Step[] = [];
  currentStep: Step;
  currentStepIndex: number;

  constructor(
    private transitionService: TransitionService
  ) {
    this.transitionService.findAll().subscribe(data => {
      this.transitions = data;
      this.steps.push(new Step(this.transitions[0].beginState, this.transitions));
      this.currentStepIndex = 0;
      this.currentStep = this.steps[0];
    });
  }

  ngOnInit(): void {
  }
}

export class Step {
  nextTransitions: Transition[] = [];
  currentState: State;

  constructor(
    currentState: State,
    transitions: Transition[]
  ) {
    this.currentState = currentState;

    for (let transition of transitions) {
      if (_.isEqual(transition.beginState, this.currentState)) {
        this.nextTransitions.push(transition);
      }
    }
  }

}
