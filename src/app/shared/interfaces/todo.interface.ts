import { AbstractControl, ValidationErrors } from "@angular/forms";

export interface ITodo {
  text?: string;
  date?: string;
  isImportant?: boolean;
  id?: string;
}

export interface ITaskForm {
  text: (
    | string
    | ((control: AbstractControl<string, string>) => ValidationErrors)[]
  )[];
  date: (
    | string
    | ((control: AbstractControl<string, string>) => ValidationErrors)[]
  )[];
  isImportant: boolean;
}
