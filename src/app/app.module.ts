import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {OperationsService} from './services/operations.service';
import { ComponentsModule } from "./lib/components/components.module";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,HttpClientModule, ComponentsModule],
  providers: [HttpClient, OperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }