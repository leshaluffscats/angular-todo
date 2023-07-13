import { Component, Output, EventEmitter } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ITodo } from "../../interfaces/todo.interface";

@Component({
  selector: "todo-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent {
  taskForm = this.formBuilder.group({
    text: ["", Validators.required],
    date: ["", Validators.required],
    isImportant: [false],
  });

  @Output() passTask = new EventEmitter<ITodo>();

  passTaskObject(task: ITodo) {
    this.passTask.emit(task);
  }
  constructor(private formBuilder: FormBuilder) {
    // ....
  }
}
