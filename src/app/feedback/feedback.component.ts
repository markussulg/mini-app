import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  showFeedback: boolean = false;

  checkoutForm = this.formBuilder.group({
    name: '',
    email: '',
    message: '',
  });
  constructor( 
    private formBuilder: FormBuilder,    
    private feedbackService: FeedbackService
    ) { }

  ngOnInit(): void {
    //this.feedbackService.loadPreviousFeedback()
  }

  triggerFeedback() {
    this.showFeedback = !this.showFeedback;
  }

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    //var obj = {a: "Hello", b: "World"};
    //var fs = require('fs');
    //fs.writeFile('myjsonfile.json', JSON.stringify(this.checkoutForm.value), 'utf8');
    let feedback = this.feedbackService.addFeedback(this.checkoutForm.value);
    this.checkoutForm.reset();
    return feedback
    //document.write(JSON.stringify(this.checkoutForm.value));

  }

  getFeedback() {
    return this.feedbackService.getAllFeedback();
  }

  saveFeedback(): void {
    this.feedbackService.downloadFeedback();
  }



}
