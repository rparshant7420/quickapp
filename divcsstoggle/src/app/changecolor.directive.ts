import { Directive, ElementRef, HostListener, Input,  } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {
  constructor(private el: ElementRef) { }

  @Input() appChangecolor!: string;

  @HostListener('mouseenter') onMouseEnter() {

    this.highlight(this.appChangecolor);

  }


  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("");
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color

  }

}




