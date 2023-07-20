import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[color]",
})
export class ColorDirective implements OnInit {
  @Input() color: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, "color", this.color);
  }
}
