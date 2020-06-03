import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Routes } from '@angular/router';

import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IntroduceComponent } from './pages/introduce/introduce.component';

export const routesList: Routes = [{
  path: '',
  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
}, {
  path: 'contact',
  component: ContactComponent
}, {
  path: 'introduce',
  component: IntroduceComponent,
}, {
  path: 'products',
  component: ProductsComponent
}, {
  path: '**',
  component: NotFoundComponent
}];
