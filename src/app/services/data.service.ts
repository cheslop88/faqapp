import { Injectable } from '@angular/core';
import { Question} from '../models/Question';

@Injectable()
export class DataService {
  questions: Question[];

  constructor() {
    /*this.questions = [
      {
        text: 'This is a test question',
        answer: 'Test Answer',
        hide: true
      },
      {
        text: 'This is a test question 1',
        answer: 'Test Answer',
        hide: true
      },
      {
        text: 'This is a test question 2',
        answer: 'Test Answer',
        hide: true
      },
    ];*/
  }

  // Get the question from the local storage
  getQuestions() {
    if (localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  // Add a new question to the local storage
  addQuestion(question: Question) {
    this.questions.unshift(question);

    // local var init
    let questions;

    if (localStorage.getItem('questions') === null) {
      questions = [];
      // push a new question
      questions.unshift(question);
      // set new array to local storage
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      // add new questions
      questions.unshift(question);
      // reset the local storage
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }

  // Remove a question from the local storage
  removeQuestion(question: Question) {
    for (let i = 0; i < this.questions.length; i++) {
      if (question === this.questions[i]) {
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }

}
