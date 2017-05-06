import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { DinoListComponent } from './dino-list/dino-list.component';
import { RandomDinoComponent } from './random-dino/random-dino.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    DinoListComponent,
    RandomDinoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
