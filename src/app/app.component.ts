import { Component } from "@angular/core";
import { ITodo } from "./shared/interfaces/todo.interface";

@Component({
  selector: "todo-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public tasks: ITodo[] = [];

  public addNewTask(task: ITodo): void {
    this.tasks.push(task);
  }

  public trackById(index: number, task: ITodo): string {
    return task.id;
  }

  public deleteTask(id: string): void {
    this.tasks = this.tasks.filter(el => el.id !== id);
  }
}

// todo инпуты сделать не под таской а вместо полей
