import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "todo-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang("en");
  }

  changeLang(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.translate.use(target.value);
  }
}
