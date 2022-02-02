import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHorizontalscroll]'
})
export class HorizontalscrollDirective {

  constructor(private element: ElementRef) { }
  @HostListener("wheel", ["$event"])
  public onScroll(event: WheelEvent) {
    this.element.nativeElement.scrollLeft += event.deltaY;
    event.preventDefault();
  }

}
