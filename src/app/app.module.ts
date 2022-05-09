import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms'; /////1*
import { MatTableModule } from '@angular/material/table'  

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
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
