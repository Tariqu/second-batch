import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DashboardComponent,
  DocsComponent,
  FeaturesComponent,
  ResourcesComponent,
  EventsComponent,
  BlogsComponent,
  PageNotFoundComponent,
  HeaderComponent,
  FooterComponent,
  UsersComponent,
  UsersDetailComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FeaturesComponent,
    DocsComponent,
    ResourcesComponent,
    EventsComponent,
    BlogsComponent,
    DashboardComponent,
    PageNotFoundComponent,
    UsersComponent,
    UsersDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
