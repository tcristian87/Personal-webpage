import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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

  ngOnInit(): void {

  }
  submitForm(){}
  // submitForm(contactForm}) {
  // this.http.post('https://formsubmit.co/a6748cd73b7117e28617c38996610257')
  // console.log(contactForm)
  // }
  
}

