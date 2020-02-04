import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../services/Quiz.service';

@Component({
  selector: 'app-Responses',
  templateUrl: './Responses.component.html',
  styleUrls: ['./Responses.component.css']
})
export class ResponsesComponent implements OnInit {

  responses: any;
  answers: any;

  constructor(private router: ActivatedRoute, private _quizService: QuizService) {
    this.router.queryParams.subscribe(data => {
      this.responses = data;
      this.answers = this._quizService.getAnswers();
    });
   }

  ngOnInit() {
  }

  validateResponses(question: any, response: any): any {
    let result = '';

    if (question.id === 1) {
      result = response;
    }

    if (question.id === 2) {
      let isOk = false;
      result += '<div class="col-6">';

      for (const itm of question.answers) {
        isOk = false;

        if (itm.isCorrect && response.find(r => r === itm.value)) {
          isOk = true;
        } else if (!itm.isCorrect && !response.find(r => r === itm.value)) {
          isOk = true;
        }

        if (isOk) {
          result += '<div class="text-success">' + itm.value + '</div>';
        } else {
          result += '<div class="text-danger>' + itm.value + '</div>';
        }
      }

      result += '</div>';
    }

    // Question 3
    if (question.id === 3) {
      if (this.checkPalindrome(response, null)) {
        result = '<span class="text-success">Your palindrome its ok: ' + response + '</span>';
      } else {
        result = '<span class="text-danger">Your palindrome its not valid: ' + response + '</span>';
      }
    }

    // Question 4
    if (question.id === 4) {
      if (this.checkPalindrome(response[0], response[1])) {
        result = '<span class="text-success">Your reverse input its ok: ' + response + '</span>';
      } else {
        result = '<span class="text-danger">Your reverse input its not valid: ' + response + '</span>';
      }
    }

    return result;
  }


  checkPalindrome(wordl: string, word2: string): boolean {
    let result = false;
    wordl = wordl.toLowerCase();

    if (!word2) {
      const pal = wordl.split('').reverse().join('');
      if (pal === wordl) {
        result = true;
      }
    } else {
      word2 = word2.toLowerCase();
      const pal = word2.split('').reverse().join('');
      if (pal === wordl) {
        result = true;
      }
    }

    return result;
  }

}
