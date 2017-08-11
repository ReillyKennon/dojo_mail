import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Create array of email objects with Email, importance: Boolean, Subject, Content
  emails = [
    {email: 'blah@blah.com', important: true, subject: 'blahblah', content: 'blahblahalh'},
    {email: 'qwe@awe.com', important: false, subject: 'qwerqwer', content: 'qwerqwerqwerqwer'}
  ]
}
