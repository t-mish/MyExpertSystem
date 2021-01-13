import {Component, OnInit} from '@angular/core';
import {State, Transition} from "./model/transition";
import {TransitionService} from "./service/transition.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  currentState: State;
  isFinished: boolean;
  answer: string;

  private transitions: Transition[];

  constructor(
    private transitionService: TransitionService
  ) {

  }

  ngOnInit(): void {
    this.transitionService.findAll().subscribe(data => {
      this.transitions = data;
      this.updateCurrent(1);
    });
  }

  updateCurrent(transitionId: number): void {
    this.currentState = this.transitions[transitionId].beginState;
    this.isFinished = this.transitions[transitionId].isFinish;
    this.answer = this.transitions[transitionId].answer;
  }
}
