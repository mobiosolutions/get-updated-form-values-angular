import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgxJsonViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
