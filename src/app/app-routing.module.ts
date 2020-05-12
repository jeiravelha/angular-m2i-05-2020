import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PageListClientComponent } from './clients/pages/page-list-client/page-list-client.component';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';
import { PageListOrderComponent } from './orders/pages/page-list-order/page-list-order.component';


const routes: Routes = [
  { path :'' , redirectTo: '/login', pathMatch : 'full'},
  { path : 'login', component: PageLoginComponent },
  { path : 'orders', component: PageListOrderComponent },
  { path : 'clients', component: PageListClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
