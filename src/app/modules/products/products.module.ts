import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ProductsRoutingModule } from './products-routing.module';

import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ProductListPageComponent,
    ProductDetailPageComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,

    MatIconModule,
    MatButtonModule,
  ]
})
export class ProductsModule { }
