import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
  selector: "[condition]",
})
export class ConditionDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef, //объект рендера
  ) {}
  @Input() set condition(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef); //тут компонент рендерится
    } else {
      this.viewContainer.clear();
    }
  }
}
