import {Component, Input, OnInit} from '@angular/core';
import {Step} from "../../app.component";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() step: Step;

  constructor() { }

  ngOnInit(): void {
  }

}
