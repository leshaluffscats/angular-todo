import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit,
} from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ITaskForm, ITodo } from "../../interfaces/todo.interface";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "todo-form",
  templateUrl: "./createTask.component.html",
  styleUrls: ["./createTask.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTaskComponent implements OnInit {
  @Output() passTask = new EventEmitter<ITodo>();

  public taskForm = this.formBuilder.group<ITaskForm>({
    text: ["", [Validators.required]],
    date: ["", [Validators.required]],
    isImportant: false,
  });

  constructor(private formBuilder: FormBuilder) {
    // ....
  }

  ngOnInit(): void {
    console.log(this.taskForm);
  }

  public addTask(): void {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }

    const newTask: ITodo = this.taskForm.getRawValue();
    newTask.id = uuidv4();
    this.passTask.emit(newTask);
    this.taskForm.reset();
  }

  get _date() {
    return this.taskForm.get("date");
  }

  get _text() {
    return this.taskForm.get("text");
  }
}
