import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', 
        loadChildren: () => import('./modules/home/home.route').then(r => r.HomeRoutes),
    },
    {
        path: 'products',
        loadChildren: () => import('./modules/products/products.module').then(r => r.ProductsModule),
    },
];
