import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TrackerApplicationComponent} from './tracker-application/tracker-application.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  {path: 'trackerApp', component: TrackerApplicationComponent},
  {path: 'notFound', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
