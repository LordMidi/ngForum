import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2Webstorage } from 'ngx-webstorage';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { TopicsComponent } from './topics/topics.component';
import { NewTopicComponent } from './new-topic/new-topic.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TopicComponent } from './topic/topic.component';

const appRoutes: Routes = [
  { path: 'topic/:id', component: TopicComponent },
  { path: 'new-topic', component: NewTopicComponent },
  { path: '', component: TopicsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    NewTopicComponent,
    CreatePostComponent,
    PageNotFoundComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    Ng2Webstorage,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
