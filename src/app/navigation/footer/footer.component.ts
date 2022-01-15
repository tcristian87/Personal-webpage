import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toHome() {
    document
      .getElementById('home')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  toResume() {
    document
      .getElementById('resume')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  toAbout() {
    document
      .getElementById('about')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
