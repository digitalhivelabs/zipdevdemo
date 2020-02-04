import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/Quiz.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-Quiz',
  templateUrl: './Quiz.component.html',
  styleUrls: ['./Quiz.component.css']
})
export class QuizComponent implements OnInit {

  currentQuestion: any;
  stepsControl = { steps: 4, currentStep: 1 };
  responses: any;
  isStepChanged = false;

  constructor(private _quizService: QuizService, private router: Router) { }

  ngOnInit() {

    // NOTE: This is a quick work around just for the demo porpuses.
    if (this.currentQuestion === undefined) {
      const questionId = 1;
      this.currentQuestion = this._quizService.getQuestion(questionId);
    }
  }

  getPercentage() {

    let result = '';

    result += ((this.stepsControl.currentStep / this.stepsControl.steps) * 100);
    result += '%';

    return result;

  }

  onResponse(valueSelected: any) {

    console.log(valueSelected);

    if (valueSelected.automatictrigger) {
      this.responses = valueSelected.response;
      this.onNextQuestion();

    } else {
      console.log('changed values?', this.responses, valueSelected);
      if (this.responses === undefined || this.responses !== valueSelected.response) {
        this.responses = valueSelected;
        this.isStepChanged = true;
      }
    }

  }

  onNextQuestion() {
    this.isStepChanged = false;
    this.stepsControl.currentStep++;
    this.currentQuestion = this._quizService.getQuestion(this.currentQuestion.nextQuestionId);
  }

  onFinish() {
    const navigationExtras: NavigationExtras = {
      queryParams: this.responses
    };

    this.router.navigate(['/responses'], navigationExtras);
  }

}
