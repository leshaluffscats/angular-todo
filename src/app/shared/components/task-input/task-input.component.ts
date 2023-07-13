import {
  Component,
  ChangeDetectionStrategy,
  forwardRef,
  ChangeDetectorRef,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "todo-task-input",
  templateUrl: "./task-input.component.html",
  styleUrls: ["./task-input.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TaskInputComponent),
      multi: true,
    },
    // можно вместо providers использовать в конструкторе @Self ngControl
    // И указать ему valueAccessor = this
  ],
})
export class TaskInputComponent implements ControlValueAccessor {
  value: string | undefined;

  onChange!: (value: string) => void;
  onTouched!: () => void;

  writeValue(value: string): void {
    this.value = value;
    this.changeDetector.detectChanges(); //если changeDetectionStrategy = default тогда метод detectChanges не надо использовать
  }

  onInputValueChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.onChange(value);
  }

  registerOnChange(fn: (value: string) => void): void {
    // вызываются ангуляром и в них будет прилетать функция, которую необходимо создать
    // в любом момент когда меняется состояние внутри компонента, то этот метод тригериться
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  constructor(private readonly changeDetector: ChangeDetectorRef) {
    // ----
  }
}
