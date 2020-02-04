import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../Model/Question';

@Component({
  selector: 'app-Question',
  templateUrl: './Question.component.html',
  styleUrls: ['./Question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  @Output() valueChanged = new EventEmitter();
  response = new Array();
  remindSeconds: number;
  freeTextResponses = new Array();
  isAutomaticTrigger = false;
  timer;

  constructor() {}

  ngOnInit() {
  }

  onValueSelected() {
    this.valueChanged.emit(this.response);
  }

  onOptionSelected(value: any) {

    if (this.response[this.question.id] === undefined) {
      this.response[this.question.id] = new Array();
    }

    if (this.response[this.question.id].find(v => v === value)) {
      this.response = this.response[this.question.id].filter(v => v !== value);
    } else {
      this.response[this.question.id].push(value);
    }

    this.valueChanged.emit(this.response);

  }

  ngOnChanges(changes: any) {

    this.isAutomaticTrigger = false;
    if (this.question.id === 1 || this.question.id === 2) {
      this.isAutomaticTrigger = true;
    }

    this.startCountdown(this.question.responseInterval);

    if (this.question.id === 4) {
      this.response[this.question.id] = this.freeTextResponses;
    }
  }

  startCountdown(seconds: number) {

    this.remindSeconds = seconds;
    clearInterval(this.timer);
    let counter = seconds;

    this.timer = setInterval(() => {

      this.remindSeconds = counter;
      counter--;

      if ( counter < 0 ) {
        clearInterval(this.timer);
        this.valueChanged.emit({
          automatictrigger: this.isAutomaticTrigger,
          response: this.response
        });
      }

    }, 1000);
  }
}
