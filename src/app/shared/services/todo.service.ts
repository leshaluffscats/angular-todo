import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ITodo } from "../interfaces/todo.interface";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  private todos$: BehaviorSubject<ITodo[]> = new BehaviorSubject([]);

  public addTodo(todo: ITodo): void {
    const value = this.todos$.getValue();
    value.push(todo);
    this.todos$.next(value);
  }

  public removeTodo(id: string): void {
    const todos = this.todos$.getValue(); //значение из стрима
    const index = todos.findIndex(todo => todo.id === id); //индекс элемента который надо удалить
    if (index !== -1) {
      todos.splice(index, 1); //удаление элемента
    }
    this.todos$.next(todos); //эмит нового массива в стрим
  }

  public getTodos(): BehaviorSubject<ITodo[]> {
    return this.todos$;
  }
}
