import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewCocktailComponent } from './view-cocktail/view-cocktail.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'cocktail/:id',
    component: ViewCocktailComponent,
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
