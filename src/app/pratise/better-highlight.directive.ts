import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor(public dummy1: ElementRef, public dummy: Renderer2) {
    this.dummy.setStyle(this.dummy1.nativeElement , 'background-color' , 'yellow')
  }
  @HostBinding('style.backgroundColor') backgroundColor: string = 'gray;'

  @HostListener('mouseover') mouseover() {
    // this.dummy.setStyle(this.dummy1.nativeElement, 'background-color', 'yellow')
    this.backgroundColor = 'red';
  }
  @HostListener('mouseleave') mouseleave() {
    // this.dummy.setStyle(this.dummy1.nativeElement, 'background-color', 'lightgray')
    this.backgroundColor = 'gray';
  }
  ngOnInit() {

  }

}
