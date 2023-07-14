import { Component } from "@angular/core";
import { ITodo } from "./shared/interfaces/todo.interface";

@Component({
  selector: "todo-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "todo-app";
  tasks: ITodo[] = [];

  pushTaskData(task: ITodo) {
    this.tasks = [...this.tasks, task];
  }
}
