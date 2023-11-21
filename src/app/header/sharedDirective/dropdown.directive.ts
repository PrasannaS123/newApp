import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]',
  exportAs: 'appDropDown'
})
export class DropDownDirective {

  @HostBinding('class.show') isOpen = false;

  @HostListener('document: click', ['$event']) toggleOpen(event:Event) {
    this.isOpen = this.eleRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private eleRef:ElementRef){}

  
}



