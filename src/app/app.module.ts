import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms'; /////1*

import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,  ///////2*
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
