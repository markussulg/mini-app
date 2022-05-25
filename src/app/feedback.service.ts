import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const filename: string = "feedback.json";

export interface Feedback {
  name: string,
  email: string,
  message: string,
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  feedbackList: Feedback[] = [];

  constructor(private http: HttpClient) {
    this.loadPreviousFeedback();
  }

  addFeedback(feedback: Feedback) {
    this.feedbackList.push(feedback);
  }   

  public getAllFeedback(): string{
    return JSON.stringify(this.feedbackList);
  }

  //https://stackoverflow.com/questions/47054861/write-an-object-to-an-json-file-using-angular
  downloadFeedback(){
    console.warn(this.feedbackList);
    var a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(JSON.stringify(this.feedbackList)));
    a.setAttribute('download', filename);
    a.click()
  }

  public loadPreviousFeedback() {
    return this.http.get<Feedback[]>(
      '/assets/feedback.json'
    ).subscribe((previousFeedbackList) => {
      for  (let feedback of previousFeedbackList) {
        this.feedbackList.push(feedback);
      }
    });
  }
}
