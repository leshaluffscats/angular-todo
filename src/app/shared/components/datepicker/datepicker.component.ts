import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Self,
} from "@angular/core";
import { ControlValueAccessor, FormControl, NgControl } from "@angular/forms";

@Component({
  selector: "todo-datepicker",
  templateUrl: "./datepicker.component.html",
  styleUrls: ["./datepicker.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent implements ControlValueAccessor {
  date = new FormControl("");

  constructor(
    @Self() private readonly ngControl: NgControl,
    private readonly changeDetector: ChangeDetectorRef,
  ) {
    this.ngControl.valueAccessor = this;
  }

  onChange!: (value: string) => void;
  onTouched!: () => void;

  writeValue(value: string): void {
    this.date.setValue(value);
    this.changeDetector.detectChanges();
  }

  onInputChange() {
    this.onChange(this.date.value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
