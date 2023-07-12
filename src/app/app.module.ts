import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormComponent } from './shared/components/form/form.component';
import { TaskInputComponent } from './shared/components/task-input/task-input.component';
import { ImportantFlagComponent } from './shared/components/important-flag/important-flag.component';
import { TaskDateComponent } from './shared/components/task-date/task-date.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    TaskInputComponent,
    ImportantFlagComponent,
    TaskDateComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
