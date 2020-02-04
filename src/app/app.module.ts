import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { QuizComponent } from './Quiz/Quiz.component';
import { ResponsesComponent } from './Responses/Responses.component';
import { RestaurantPickerComponent } from './RestaurantPicker/RestaurantPicker.component';
import { QuestionComponent } from './Quiz/Question/Question.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';


@NgModule({
   declarations: [
      AppComponent,
      QuizComponent,
      QuestionComponent,
      ResponsesComponent,
      RestaurantPickerComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
