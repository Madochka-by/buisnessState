import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./home-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: 'aboutUs',
    loadChildren: () =>
      import('./about-us/about-us.module').then((m) => m.AboutUsModule),
  },
  {
    path: 'properties',
    loadChildren: () =>
      import('./properties-page/properties-page.module').then(
        (m) => m.PropertiesPageModule
      ),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./services-page/services-page.module').then(
        (m) => m.ServicesPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
