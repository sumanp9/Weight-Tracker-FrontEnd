import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TrackerApplicationComponent} from './tracker-application/tracker-application.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path: 'trackerApp', component: TrackerApplicationComponent},
  {path: 'notFound', component: NotFoundComponent},
  {path: 'frontPage', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
