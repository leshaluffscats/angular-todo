import { Injectable } from "@angular/core";
import { TodoService } from "./todo.service";
import { ITodo } from "../interfaces/todo.interface";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  constructor(private todoService: TodoService) {}
  getItem(key: string): ITodo[] {
    return JSON.parse(localStorage.getItem(key));
  }

  setItem() {
    localStorage.setItem(
      "todos",
      JSON.stringify(this.todoService.getTodos().getValue()),
    );
  }
}
