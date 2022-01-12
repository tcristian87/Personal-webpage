import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }
  toHome(){

    document.getElementById("home")?.scrollIntoView({behavior: "smooth", block: "start"});
  }
  toAbout(){
    document.getElementById("about")?.scrollIntoView({behavior: "smooth", block: "start"});
  }
  toResume() {
    document.getElementById("resume")?.scrollIntoView({behavior: "smooth", block: "start"});
  }
  toContact() {
    document.getElementById("contact")?.scrollIntoView({behavior: "smooth", block: "start"});
  }
  ngOnInit(): void {
  }
  public onToggleSidenav = () =>{
    this.sidenavToggle.emit();
  }

//   arrow=false;
//   @HostListener("document:scroll")
//   scrollfunction(){
//     if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
//     this.arrow=true;
//   } else {
//     this.arrow=false;
//   }
// }

}
