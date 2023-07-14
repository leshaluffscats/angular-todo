import {
  Component,
  ChangeDetectionStrategy,
  forwardRef,
  ChangeDetectorRef,
} from "@angular/core";
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";

@Component({
  selector: "todo-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
    // можно вместо providers использовать в конструкторе @Self ngControl
    // И указать ему valueAccessor = this
  ],
})
export class InputComponent implements ControlValueAccessor {
  task = new FormControl("");

  constructor(private readonly changeDetector: ChangeDetectorRef) {
    // ----
  }

  onChange!: (value: string) => void;
  onTouched!: () => void;

  writeValue(value: string): void {
    this.task.setValue(value);
    this.changeDetector.detectChanges(); //если changeDetectionStrategy = default тогда метод detectChanges не надо использовать
  }

  onInputValueChange(): void {
    this.onChange(this.task.value);
  }

  registerOnChange(fn: (value: string) => void): void {
    // вызываются ангуляром и в них будет прилетать функция, которую необходимо создать
    // в любом момент когда меняется состояние внутри компонента, то этот метод тригериться
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
