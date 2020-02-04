import { Injectable, OnInit } from '@angular/core';
import { Question } from '../Model/Question';
import { Observable } from 'rxjs';
import { Answer } from '../Model/Answer';

@Injectable({
  providedIn: 'root'
})
export class QuizService implements OnInit{

private questions: Question[];
constructor() { }

// NOTE: the services was called QUIZ because ideally questions belongs to a quiz entity, and can be
// a lot of possible implementations, grouping questions, order, pre-condicions, flows, hierarchically,
// in the case I just put a next question into the question object so the order can be altered easily
// only to acomplish this assesment in a short time.

ngOnInit() {
    this.prepareQuestions();
}

private prepareQuestions() {
    this.questions = new Array();

    // QUESTION:
    this.questions.push({
        id: 1,
        nextQuestionId: 2,
        responseInterval: 10, // Seconds
        question: 'How do you describe yourself as a developer?',
        notes: '',
        type: QuestionType.SingleValue,
        choices: [
            { displayValue: 'Hermit', notes: ''},
            { displayValue: 'Sociable', notes: ''},
            { displayValue: 'Serious', notes: ''},
            { displayValue: 'Grumpy', notes: ''},
            { displayValue: 'do not know yet', notes: ''}
        ],
        answers: null
    });

    // QUESTION: 2
    this.questions.push({
        id: 2,
        nextQuestionId: 3,
        responseInterval: 10,
        question: 'Select the JavaScript based technologies:',
        notes: '',
        type: QuestionType.MultipleOptions,
        choices: [
            { displayValue: 'AngularJS', notes: ''},
            { displayValue: 'Ember', notes: ''},
            { displayValue: 'VueJS', notes: ''},
            { displayValue: 'Java', notes: ''},
            { displayValue: 'C#', notes: ''}
        ],
        answers: null
    });


    // QUESTION: 3
    this.questions.push( {
        id: 3,
        nextQuestionId: 4,
        responseInterval: -1,
        question: 'Please enter a palindrome word',
        //tslint:disable-ne-line:max-line-length
        notes:'<p>Please enter  just a <string>single</strong> word for this example <i> (this condition maybe doest not make to much sense but for this demo should be ok)</i></p>',
        type: QuestionType.SingleText,
        choices: [
            { displayValue: '', notes: 'Sample: AnA'}
        ],
        answers: null
    });

    // QUESTION: 4
    this.questions.push( {
        id: 4,
        nextQuestionId: -1,
        responseInterval: -1,
        question: 'Please enter the requested values in the following boxes:',
        notes: '',
        type: QuestionType.FreeText,
        choices: [
            { displayValue: '', notes: 'Enter a phrase or a sentence you have in mind, sample: today is monday'},
            { displayValue: '', notes: 'Enter in reverse what you time in first textbox, sample: yadnom si yadot'}
        ],
        answers: null
    });
}

    // NOTE: I dedided to return question by question, because there are a lot of scenearios that can not guarateed
    // or unnecesary full questios retrival, in this case will be a question by question with a next button, so
    // this can increase performance and securrity issues. (There are more thar can be argumented here, it's
    // question of combine different opinions)
    getQuestion(qid: number): Question {
        this.prepareQuestions();
        const result = this.questions.find(q => q.id === qid);

        return result;
    }

    getAnswers(): any {
        const result = new Array<Question>();

        // Question 1
        result.push({
            id: 1,
            nextQuestionId: -1, // NOTE: Im using this to identify last question, there are othre aproches or patterns.
            responseInterval: -1,
            question: 'you describe yourself as a developer as:', 
            notes: '',
            type: QuestionType.MultipleOptions,
            choices: null,
            answers: [ 
                { value: 'AngularJS', isCorrect: true},
                { value: 'Ember', isCorrect: true},
                { value: 'VueJS', isCorrect: true},
                { value: 'Java', isCorrect: false},
                { value: 'C#', isCorrect: false}
            ]
        });

        // Question 2
        result.push({
            id: 2,
            nextQuestionId: -1, // NOTE: Im using this to identify last question, there are othre aproches or patterns.
            responseInterval: -1,
            question: 'JavaScript based technologies selected:',
            notes: '',
            type: QuestionType.MultipleOptions,
            choices: null,
            answers:[
                { value: 'AngularJS', isCorrect: true},
                { value: 'Ember', isCorrect: true },
                { value: 'VueJS', isCorrect: true},
                { value: 'Java', isCorrect: false},
                { value: 'C#', isCorrect:false}
            ]
        });

        // Question 3
        result.push({
            id: 3,
            nextQuestionId: -1, // NOTE: Im using this to identify last question, there are othre aproches or patterns.
            responseInterval: -1,
            question: 'Palindrome captured:',
            notes: '',
            type: QuestionType.SingleText,
            choices: null,
            answers: null
        });

        // Question 4
        result.push({
            id: 4,
            nextQuestionId: -1, // NOTE: Im using this to identify last question, there are othre aproches or patterns.
            responseInterval: -1,
            question: 'Reverse Exersice:',
            notes: '',
            type: QuestionType.FreeText,
            choices: null,
            answers: null
        });

        return result;
    }
}

export enum QuestionType {
    SingleValue,
    MultipleOptions,
    SingleText,
    FreeText
}
