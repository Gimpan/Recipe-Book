import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlazingHighlight]'
})
export class BlazingHighlightDirective implements OnInit {


  constructor(private renderer: Renderer2, private elRef: ElementRef) { } // helper methods
  // Use ElementRef for acccessing elements on the DOM, or in this case, just for referencing

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'orange');
  }
}
