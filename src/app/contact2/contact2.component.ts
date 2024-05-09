import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact2',
  templateUrl: './contact2.component.html',
  styleUrl: './contact2.component.css'
})
export class Contact2Component {
  constructor(private http: HttpClient) { }

  onSubmit(form: any): void {
    this.http.post('http://localhost:8000/contact/submit', form.value).subscribe(
      response => console.log('Success!', response),
      error => console.error('Error!', error)
    );
  }
}