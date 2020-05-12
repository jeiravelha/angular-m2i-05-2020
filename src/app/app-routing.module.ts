import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path :'' , redirectTo: '/login', pathMatch : 'full'},
  // Angular 8 et 9 : ça marche car le module a été importé dans app.module.ts
  //{ path : 'login', component: PageLoginComponent },
  // Angular 9 : car la class n'a pas été importé dans app.module.ts
  //{ path : 'orders', component: PageListOrderComponent },
  // Angular 8 : il faut instancier le module car on ne veux pas faire d'import dans app.module.ts / synthaxe obligatoire en Angular 8
  {
    path : 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path : 'clients',
    loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
  },
  {
    path : '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
