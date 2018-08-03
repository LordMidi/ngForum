import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';

import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { TopicsComponent } from './topics/topics.component';
import { CreateTopicComponent } from './create-topic/create-topic.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    CreateTopicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
