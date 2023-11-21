import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNavbar]',
  exportAs: 'appNavbar',
})
export class NavbarDirective {
  @HostBinding('class.show') isnavbar = false;
  
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isnavbar = this.eleRef.nativeElement.contains(event.target) ? !this.isnavbar : false;
  }
  constructor(private eleRef: ElementRef) { }
}
