import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  // elementRef: ElementRef;
  constructor(private elementRef: ElementRef) {} // shortcut to make this a property of the class (BasicHighlightDirective).
  // Use ElementRef for acccessing elements on the DOM

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green'; // not good practice to manipulate DOM by accessing it directly like this
  }
}
