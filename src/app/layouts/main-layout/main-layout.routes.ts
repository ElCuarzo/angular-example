import { Routes } from '@angular/router';

export const MAIN_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../features/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('../../features/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('../../features/dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
];