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

  constructor(private http: HttpClient) {}

  submitContactForm() {
    const url = 'http://localhost:8000/contact';
    this.http.post(url, this.contact).subscribe({
      next: (response) => {
        console.log('Form submitted successfully', response);
        alert('Form submitted successfully');
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
}
