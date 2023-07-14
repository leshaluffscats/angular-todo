import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "todo-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// todo сделать валидацию (показать ошибки под инпутами, а кнопку не дизейблить)
// todo удаление одного конкретного блока
// todo trackBy
export class HeaderComponent implements OnInit {
  public selectedLang = new FormControl("en");

  constructor(private translate: TranslateService) {
    translate.setDefaultLang("en");
  }

  ngOnInit(): void {
    this.selectedLang.valueChanges.subscribe((value: string) =>
      this.changeLang(value),
    );
  }

  changeLang(language: string) {
    this.translate.use(language);
  }
}
