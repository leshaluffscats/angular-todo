import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cut",
})
export class CutPipe implements PipeTransform {
  transform(value: string, arg: number = 10) {
    return value.slice(0, arg);
  }
}
