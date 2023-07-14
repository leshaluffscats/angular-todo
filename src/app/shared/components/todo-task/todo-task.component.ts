import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ITodo } from "../../interfaces/todo.interface";

@Component({
  selector: "todo-todo-task",
  templateUrl: "./todo-task.component.html",
  styleUrls: ["./todo-task.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoTaskComponent {
  @Input() task: ITodo;
}
