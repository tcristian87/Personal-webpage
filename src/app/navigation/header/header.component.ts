import { DOCUMENT } from '@angular/common';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Inject,
  HostListener,
} from '@angular/core';
import smoothscroll from 'smoothscroll-polyfill';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  scrolled: boolean = false;

  @Output() public sidenavToggle = new EventEmitter();

  constructor(@Inject(DOCUMENT) private document: Document) { }
  toHome() {
    document
      .getElementById('home')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  toAbout() {
    document
      .getElementById('about')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  toResume() {
    document
      .getElementById('resume')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  toContact() {
    document
      .getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  ngOnInit(): void { }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
    smoothscroll.polyfill();
  };

  downArrow = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.downArrow = false;
    } else {
      this.downArrow = true;
    }
  }

  arrowScroll() {
    this.downArrow ? this.toAbout() : this.toHome();
  }
}
