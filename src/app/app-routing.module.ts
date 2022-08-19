import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  DashboardComponent,
  DocsComponent,
  FeaturesComponent,
  ResourcesComponent,
  EventsComponent,
  BlogsComponent,
  PageNotFoundComponent,
  UsersComponent,
  UsersDetailComponent,
} from './components';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'events', component: EventsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:userId', component: UsersDetailComponent },
  { path: 'home', redirectTo: '/docs', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
