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

  steps: Step[];
  currentStep: Step;
  currentStepIndex: number;

  constructor(
    private transitionService: TransitionService
  ) {
    this.loadData();
  }

  private loadData(): void {
    this.steps = [];
    this.transitionService.findAll().subscribe(data => {
      this.transitions = data;

      let nextState: State = this.transitions[0].beginState;
      let isFinish: boolean = this.transitions[0].isFinish;

      this.steps.push(new Step(nextState, isFinish, this.transitions));
      this.currentStepIndex = 0;
      this.currentStep = this.steps[0];
    });
  }

  ngOnInit(): void {
  }

  answerSelectedHandler(selectedAnswerIndex: number) {

    let nextState: State = this.currentStep.nextTransitions[selectedAnswerIndex].endState;
    let isFinish: boolean = this.currentStep.nextTransitions[selectedAnswerIndex].isFinish;

    if (this.steps.length > this.currentStepIndex + 1) {
      this.steps = _.first(this.steps,this.currentStepIndex+1);
    }

    this.steps.push(new Step(nextState, isFinish, this.transitions));
    this.currentStepIndex++;

    this.currentStep = this.steps[this.currentStepIndex];
    this.currentStep.selectedAnswerIndex = selectedAnswerIndex;
  }

  stepSelectedHandler(index: number) {
    this.currentStepIndex = index;
    this.currentStep = this.steps[this.currentStepIndex];
  }

  onTopicSelected(topicIndex: number) {
    if (topicIndex == 0) {
      this.transitionService.setTransitionUrl(TransitionService.PLANTS_URL);
    } else if (topicIndex == 1) {
      this.transitionService.setTransitionUrl(TransitionService.DOGS_URL);
    } else if (topicIndex == 2) {
      this.transitionService.setTransitionUrl(TransitionService.CAMERAS_URL);
    }
    this.loadData();
  }
}

export class Step {
  nextTransitions: Transition[] = [];
  selectedAnswerIndex: number = 0;

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
