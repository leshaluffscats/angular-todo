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

  public editOn = false;

  public emitId(): void {
    this.taskIdPassed.emit(this.task.id);
  }

  public editTask(): void {
    this.editOn = true;
  }

  public saveTask(): void {
    this.editOn = false;
  }
}
