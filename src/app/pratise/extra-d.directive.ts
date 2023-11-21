import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appExtraD]'
})
export class ExtraDDirective {
  @Input() set appExtraD(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef)
    } else {
      this.vcRef.clear();
    }
  }


  constructor(public templateRef: TemplateRef<any>, public vcRef: ViewContainerRef) { }

}


