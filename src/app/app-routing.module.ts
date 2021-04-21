import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
		component: MainComponent, pathMatch: 'full'
  },
  {
		path: 'main',
		component: MainComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
