import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "todo-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent {
  taskForm = this.formBuilder.group({
    taskText: [""],
    date: [""],
    isImportant: [false],
  });

  constructor(private formBuilder: FormBuilder) {
    // !!
  }
}
