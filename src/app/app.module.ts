import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RndNumsComponent } from './rnd-nums/rnd-nums.component';

@NgModule({
  declarations: [
    AppComponent,
    RndNumsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
