import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Resume } from 'src/app/services/resume';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  resume: Resume[] = [];

  constructor(public resumeService: ResumeService) {}

  ngOnInit(): void {
    this.resumeService.getAll().subscribe((data: Resume[]) => {
      this.resume = data;
      // console.log(this.resume);
    });
  }
  public executeSelectedChange = (_event: any) => {};

  moveToSelectedTab(tabName: string) {
    for (
      let i = 0;
      i < document.querySelectorAll('.mat-tab-label-content').length;
      i++
    ) {
      if (
        (<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i])
          .innerText == tabName
      ) {
        (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
      }
    }
  }
  }
