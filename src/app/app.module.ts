import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintjsComponent } from './printjs/printjs.component';
import { HtmlComponent } from './printjs/html/html.component';
import { JsonComponent } from './printjs/json/json.component';
import { ImageComponent } from './printjs/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    PrintjsComponent,
    HtmlComponent,
    JsonComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
