import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';


@Directive({
  selector: '[appEavesdropper]'
})
export class EavesdropperDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'yellow';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor; // Use hostbinding to access property on host element

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }
  ngOnInit() {
  }
  // HostListener for listening on element it sits on/applied to and execute function when it occurs
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor; // in this case, we use the HostBinding. this will be the element we applied directive on
  }
}
