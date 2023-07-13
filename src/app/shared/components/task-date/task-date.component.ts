import { ChangeDetectorRef, Component, Self } from "@angular/core";
import { ControlValueAccessor, NgControl } from "@angular/forms";

@Component({
  selector: "todo-task-date",
  templateUrl: "./task-date.component.html",
  styleUrls: ["./task-date.component.scss"],
})
export class TaskDateComponent implements ControlValueAccessor {
  value: string | undefined;

  onChange!: (value: string) => void;
  onTouched!: () => void;

  constructor(
    @Self() private readonly ngControl: NgControl,
    private readonly changeDetector: ChangeDetectorRef,
  ) {
    this.ngControl.valueAccessor = this;
  }

  writeValue(value: string): void {
    this.value = value;
    this.changeDetector.detectChanges();
  }

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.onChange(value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
