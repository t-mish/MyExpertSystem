import {Component, Input, OnInit} from '@angular/core';
import {Step} from "../../app.component";

@Component({
  selector: 'app-step-tree',
  templateUrl: './step-tree.component.html',
  styleUrls: ['./step-tree.component.css']
})
export class StepTreeComponent implements OnInit {
  @Input() step: Step;

  buttons: Button[];

  constructor() {
    this.buttons = [
      new Button(true)
    ];
  }

  ngOnInit(): void {
  }

  public setBtnProgress(index: number): boolean {
    return true;
  }
}

export class Button {
  currentClasses = {
    'btn': true,
    'multisteps-form-progress-btn': true,
    'js-active': false
  };
  currentStyles = {
    height: 0
  };

  constructor(isActive: boolean) {
    this.currentClasses['js-active'] = isActive;
  }

  setButtonActive(isActive: boolean): void {
    this.currentClasses['js-active'] = isActive;
  }
}

