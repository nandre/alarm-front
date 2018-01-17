import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {AlarmService} from "../toolbox/alarm/alarm-service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from "ngx-toastr";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ToastrModule.forRoot(), // ToastrModule added
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [AlarmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
