import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Step} from "../../app.component";
import {Transition} from "../../model/transition";

@Component({
  selector: 'app-step-tree',
  templateUrl: './step-tree.component.html',
  styleUrls: ['./step-tree.component.css']
})
export class StepTreeComponent implements OnInit {
  @Input() steps: Step[];
  @Input() currentStepIndex: number;

  @Output() selectedStepIndex: EventEmitter<number> = new EventEmitter<number>();

  selectedAnswerIndex: number;

  currentClasses = {
    'btn': true,
    'multisteps-form-progress-btn': true,
  };

  currentStyles = {
    height: 0
  };

  onClicked(index: number) {
    this.selectedStepIndex.emit(index);
  }

  ngOnInit(): void {
  }
}

