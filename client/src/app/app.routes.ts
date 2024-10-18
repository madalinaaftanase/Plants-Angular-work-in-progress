import { Routes } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';
import { HomeComponent } from './features/home/home.component';
import { UserPlantsComponent } from './features/user-plants/user-plants.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'plants', component: UserPlantsComponent },
  {
    path: '**',
    redirectTo: 'home',
  },
];
