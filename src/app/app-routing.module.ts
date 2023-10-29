import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { homeComponent } from './home/home.component';
import { PageNotFound } from './pageNotFound/pageNotFound.component';
import { dettaglioComponent } from './dettaglio/dettaglio.component';

const routes: Routes = [
  { path: 'home', component: homeComponent },
  { path: 'dettaglio/:id', component: dettaglioComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFound }, // route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
