import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from "@angular/core";
import { ControlValueAccessor, FormControl, NgControl } from "@angular/forms";

@Component({
  selector: "todo-datepicker",
  templateUrl: "./datepicker.component.html",
  styleUrls: ["./datepicker.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent implements ControlValueAccessor {
  public control: FormControl = new FormControl("");

  constructor(
    private ngControl: NgControl, //ngControl - базовый класс от которого наследуются formControl. Связывает formControl с элементом в DOM
    private readonly cdRef: ChangeDetectorRef,
  ) {
    this.ngControl.valueAccessor = this;
    if (this.ngControl.control?.parent) {
      this.control.setParent(this.ngControl.control?.parent);
    }
  }

  public ngOnInit(): void {
    this.initErrors();
    this.initControlValueChanges();
  }

  public ngDoCheck(): void {
    if (this.ngControl.control?.errors !== this.control.errors) {
      this.initErrors();
    }
    if (this.ngControl.control?.touched) {
      this.control.markAsTouched();
      this.cdRef.markForCheck();
    } else {
      this.control.markAsPristine();
    }
  }

  public writeValue(value: string): void {
    this.control.setValue(value, { emitEvent: false });
    this.cdRef.detectChanges();
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public onTouched: () => void;

  public onChange: (value: string) => void;

  protected initErrors(): void {
    this.control.setErrors(this.ngControl.control!.errors);
  }

  protected initControlValueChanges(): void {
    this.control.valueChanges.subscribe(value => {
      this.onChange(value);
    });
  }
}
