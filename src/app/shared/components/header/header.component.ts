import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "todo-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
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
