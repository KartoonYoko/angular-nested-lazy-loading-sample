import { Component } from '@angular/core';
import { ProductListItemModel } from '../../pages/product-list-page/product-list-page.models';
import { ProductListPageAPIService } from '../../services/product-list-page/product-list-page-api.service';
import { of, tap, switchMap } from 'rxjs';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
    public list: ProductListItemModel[] = [];
    public isLoading = false;

    constructor(
        private readonly _serviceAPI: ProductListPageAPIService,
    ) {
        of(null).pipe(
            tap(() => this.isLoading = true),
            switchMap(() => this._serviceAPI.GetProductList()),
            tap(model => this.list = model),
            tap(() => this.isLoading = false),
        ).subscribe({
            error: () => {
                alert('Ошибка');
            }
        });
    }

}
