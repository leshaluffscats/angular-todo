import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ITodo } from "../../interfaces/todo.interface";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "todo-form",
  templateUrl: "./createTask.component.html",
  styleUrls: ["./createTask.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTaskComponent {
  @Output() passTask = new EventEmitter<ITodo>();

  public taskForm = this.formBuilder.group({
    text: ["", Validators.required],
    date: ["", [Validators.required, Validators.maxLength(10)]],
    isImportant: [false],
  });

  constructor(private formBuilder: FormBuilder) {
    // ....
  }

  public addTask(): void {
    const newTask: ITodo = this.taskForm.getRawValue();
    newTask.id = uuidv4();

    this.passTask.emit(newTask);
    this.taskForm.reset();
  }
}
