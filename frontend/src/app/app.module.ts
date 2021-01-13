import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StepTreeComponent } from './component/step-tree/step-tree.component';
import { AnswerComponent } from './component/answer/answer.component';
import { ExplanationComponent } from './component/explanation/explanation.component';
import {TransitionService} from "./service/transition.service";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    StepTreeComponent,
    AnswerComponent,
    ExplanationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TransitionService, {provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
