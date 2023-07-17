import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { ITodo } from "../../interfaces/todo.interface";

@Component({
  selector: "todo-todo-task",
  templateUrl: "./todo-task.component.html",
  styleUrls: ["./todo-task.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoTaskComponent {
  @Input() task: ITodo;
  @Output() taskIdPassed = new EventEmitter<string>();

  public emitId() {
    console.log("emitted", this.task.id);
    this.taskIdPassed.emit(this.task.id);
  }
}
