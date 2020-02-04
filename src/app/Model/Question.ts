import { QChoice } from './QChoice';
import { Answer } from './Answer';

export class Question {
    id: number;
    nextQuestionId: number;
    responseInterval: number;
    question: string;
    notes: string;
    type: any;
    choices: QChoice[];
    answers: Answer[];
    
}
