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
import { LoginComponent } from './modules/shared/components/login/login.component';

// routing array which contain all the routes including child route
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'features', component: FeaturesComponent },
      { path: 'docs', component: DocsComponent },
      { path: 'resources', component: ResourcesComponent },
      { path: 'events', component: EventsComponent },
      { path: 'blogs', component: BlogsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/:userId', component: UsersDetailComponent },
      { path: '', redirectTo: '/features', pathMatch: 'full' },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user-modules',
    loadChildren: () =>
      import('./modules/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./modules/product/product.module').then((m) => m.ProductModule),
  },
  { path: 'home', redirectTo: '/docs', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
