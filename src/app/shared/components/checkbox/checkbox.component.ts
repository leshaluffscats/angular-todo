import {
  Component,
  Self,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from "@angular/core";
import { ControlValueAccessor, FormControl, NgControl } from "@angular/forms";

@Component({
  selector: "todo-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent implements ControlValueAccessor {
  public control: FormControl = new FormControl();

  onChange!: (value: boolean) => void;
  onTouched!: () => void;

  constructor(
    @Self() private readonly ngControl: NgControl,
    private readonly changeDetector: ChangeDetectorRef,
  ) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit() {
    this.control.valueChanges.subscribe(value => this.onChange(value));
  }

  writeValue(value: boolean): void {
    // из кмпонента выше когда set
    this.control.setValue(value);
    this.changeDetector.detectChanges();
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
