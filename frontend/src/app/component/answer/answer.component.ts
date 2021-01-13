import {Component, Input, OnInit} from '@angular/core';
import {State, Transition} from "../../model/transition";
import {TransitionService} from "../../service/transition.service";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() currentState: State;
  @Input() answer: string;

  constructor() { }

  ngOnInit(): void {
  }

}
