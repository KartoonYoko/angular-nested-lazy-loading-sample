import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ProductsRoutingModule } from './products-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


@NgModule({
  declarations: [
    ProductListPageComponent,
    ProductDetailPageComponent,
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    // общие модули
    CommonModule,
    ProductsRoutingModule,

    // импорт модулей angular material
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
  ]
})
export class ProductsModule { }
