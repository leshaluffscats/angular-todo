import { Component, Self, ChangeDetectorRef } from "@angular/core";
import { ControlValueAccessor, NgControl } from "@angular/forms";

@Component({
  selector: "todo-important-flag",
  templateUrl: "./important-flag.component.html",
  styleUrls: ["./important-flag.component.scss"],
})
export class ImportantFlagComponent implements ControlValueAccessor {
  value!: boolean;

  onChange!: (value: boolean) => void;
  onTouched!: () => void;

  constructor(
    @Self() private readonly ngControl: NgControl,
    private readonly changeDetector: ChangeDetectorRef,
  ) {
    this.ngControl.valueAccessor = this;
  }

  writeValue(value: boolean): void {
    this.value = value;
    this.changeDetector.detectChanges();
  }

  onCheckboxChange(event: Event) {
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
