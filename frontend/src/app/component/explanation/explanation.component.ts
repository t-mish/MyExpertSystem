import {Component, Input, OnInit} from '@angular/core';
import {Step} from "../../app.component";

@Component({
  selector: 'app-explanation',
  templateUrl: './explanation.component.html',
  styleUrls: ['./explanation.component.css']
})
export class ExplanationComponent implements OnInit {
  @Input() step: Step;

  constructor() { }

  ngOnInit(): void {
  }

}
