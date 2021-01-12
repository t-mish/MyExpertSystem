import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StepTreeComponent } from './step-tree/step-tree.component';
import { AnswerComponent } from './answer/answer.component';
import { ExplanationComponent } from './explanation/explanation.component';

@NgModule({
  declarations: [
    AppComponent,
    StepTreeComponent,
    AnswerComponent,
    ExplanationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
