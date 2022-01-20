import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  name!: string;
  email!: string;
  comment!: string;
  contactForm!: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  submitForm() {}
}
