import { Component } from "@angular/core";
import { ITodo } from "./shared/interfaces/todo.interface";

@Component({
  selector: "todo-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})

// todo посмотреть trackBy - ngFor есть дополнительный атрибут
// todo посмотреть типизацию форм
export class AppComponent {
  public tasks: ITodo[] = [];

  public addNewTask(task: ITodo): void {
    this.tasks.push(task);
    console.log("app tasks", this.tasks);
  }

  // todo дописать функцию
  public identifyer() {
    return;
  }
}
