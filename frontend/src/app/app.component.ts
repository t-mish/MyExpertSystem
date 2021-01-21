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

      let nextState: State = this.transitions[0].beginState;
      let isFinish: boolean = this.transitions[0].isFinish;

      this.steps.push(new Step(nextState, isFinish, this.transitions));
      this.currentStepIndex = 0;
      this.currentStep = this.steps[0];
    });
  }

  answerSelectedHandler(nextTransition: Transition) {
    let nextState: State = nextTransition.endState
    let isFinish: boolean = nextTransition.isFinish;

    this.steps.push(new Step(nextState, isFinish, this.transitions));
    this.currentStepIndex++;
    this.currentStep = this.steps[this.currentStepIndex];
  }

  ngOnInit(): void {
  }
}

export class Step {
  nextTransitions: Transition[] = [];

  constructor(
    public currentState: State,
    public isFinish: boolean,
    transitions: Transition[],
  ) {
    this.currentState = currentState;

    for (let transition of transitions) {
      if (_.isEqual(transition.beginState, this.currentState)) {
        this.nextTransitions.push(transition);
      }
    }
  }

}
