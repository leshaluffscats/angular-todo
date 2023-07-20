import { Component, OnInit } from "@angular/core";
import { ITodo } from "./shared/interfaces/todo.interface";
import { TodoService } from "./shared/services/todo.service";
import { LocalStorageService } from "./shared/services/local-storage.service";

@Component({
  selector: "todo-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public tasks: ITodo[] = [];

  constructor(
    private todoService: TodoService,
    private localStorageService: LocalStorageService,
  ) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => (this.tasks = todos));
    this.todoService.getTodos().next(this.localStorageService.getItem("todos"));
  }
  public addNewTask(task: ITodo): void {
    this.todoService.addTodo(task);
    this.localStorageService.setItem();
  }

  public deleteTask(id: string) {
    this.todoService.removeTodo(id);
    this.localStorageService.setItem();
  }

  public trackById(_: number, task: ITodo): string {
    return task.id;
  }
}
