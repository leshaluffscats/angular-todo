import {
  Component,
  Self,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from "@angular/core";
import { ControlValueAccessor, NgControl } from "@angular/forms";

@Component({
  selector: "todo-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent implements ControlValueAccessor {
  value: boolean;

  onChange!: (value: boolean) => void;
  onTouched!: () => void;

  constructor(
    @Self() private readonly ngControl: NgControl,
    private readonly changeDetector: ChangeDetectorRef,
  ) {
    this.ngControl.valueAccessor = this;
  }

  writeValue(value: boolean): void {
    // из кмпонента выше когда set
    this.value = value;
    this.changeDetector.detectChanges();
  }

  onCheckboxChange(event: Event) {
    // когда руками в форме
    const target = event.target as HTMLInputElement;

    this.onChange(target.checked);
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
