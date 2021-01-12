import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-tree',
  templateUrl: './step-tree.component.html',
  styleUrls: ['./step-tree.component.css']
})
export class StepTreeComponent implements OnInit {
  steps: Step[];

  constructor() {
    this.steps = [
      new Step(true),
      new Step(false),
      new Step(false)
    ];
  }

  ngOnInit(): void {
  }

  public setBtnProgress(index: number): boolean {
    return true;
  }
}

export class Step {
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

