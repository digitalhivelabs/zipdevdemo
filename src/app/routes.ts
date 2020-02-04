import { Routes } from '@angular/router';
import { QuizComponent } from "./Quiz/Quiz.component";
import { ResponsesComponent } from "./Responses/Responses.component";

export const appRoutes: Routes = [
    { path: '', component: QuizComponent },
    { path: '', 
    children: [
        { path: 'responses', component: ResponsesComponent}
    ]},
    { path: '**', redirectTo: '', pathMatch: 'full'}
];

