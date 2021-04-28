import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MainComponent } from './components/main/main.component';
import { PageChooseComponent } from './components/page-choose/page-choose.component';
import { SearchLine2Component } from './components/search-line2/search-line2.component';

const routes: Routes = [
  {
    path: '',
		component: MainComponent, pathMatch: 'full'
  },
  {
		path: 'main',
		component: MainComponent
	},
  {
		path: 'catalog/:id',
		component: PageChooseComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
