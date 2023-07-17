import {
  Component,
  ChangeDetectionStrategy,
  // forwardRef,
  ChangeDetectorRef,
  OnInit,
} from "@angular/core";
import {
  ControlValueAccessor,
  FormControl,
  // NG_VALUE_ACCESSOR,
  NgControl,
} from "@angular/forms";

@Component({
  selector: "todo-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => InputComponent),
  //     multi: true,
  //   },
  // можно вместо providers использовать в конструкторе @Self ngControl
  // И указать ему valueAccessor = this
  // ],
})
export class InputComponent implements ControlValueAccessor, OnInit {
  public control: FormControl = new FormControl("");

  constructor(
    private ngControl: NgControl,
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
