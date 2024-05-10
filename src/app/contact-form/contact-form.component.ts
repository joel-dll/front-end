import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient) { }


  submitContactForm() {
    
    this.http.post('http://localhost:8000/contact', this.contact)
      .subscribe(
        response => console.log('Form submitted successfully', response),
        error => console.error('There was an error!', error)
      );
  }
}
