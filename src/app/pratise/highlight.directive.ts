import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective  {
  constructor(public dummyElement: ElementRef) { 
    this.dummyElement.nativeElement.style.backgroundColor = 'yellow';
  }
  ngOnInit() {
   }

}
