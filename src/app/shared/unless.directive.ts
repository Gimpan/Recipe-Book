import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective { // this directive works like a ngIf
  @Input() set appUnless(condition: boolean) { // still a property, like get set shortcut for building
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef); // Create our template
    } else {
      this.vcRef.clear(); // clear this area of the DOM
    }
  }
// TemplateRef helps us target/access the ng-template. VCR helps us target/access the View
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
