import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { CreateTaskComponent } from "./shared/components/createTask/createTask.component";
import { InputComponent } from "./shared/components/input/input.component";
import { CheckboxComponent } from "./shared/components/checkbox/checkbox.component";
import { DatepickerComponent } from "./shared/components/datepicker/datepicker.component";
import { TodoTaskComponent } from "./shared/components/todo-task/todo-task.component";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CutPipe } from "./shared/pipes/cut.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateTaskComponent,
    InputComponent,
    CheckboxComponent,
    DatepickerComponent,
    TodoTaskComponent,
    CutPipe,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      useDefaultLang: true,
    }),
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
