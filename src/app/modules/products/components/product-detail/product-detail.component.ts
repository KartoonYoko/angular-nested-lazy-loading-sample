import { Component, Input, OnInit } from '@angular/core';
import { ProductDetailPageAPIService } from '../../pages/product-detail-page/product-detail-page-api.service';
import { ProductDetailModel } from '../../models/product-detail-page/product-detail.model';
import { of, switchMap, tap } from 'rxjs';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
    @Input() productID!: string;
    public model?: ProductDetailModel;
    public isLoading = false;

    constructor(
        private readonly _serviceAPI: ProductDetailPageAPIService,
    ) {}

    ngOnInit(): void {
        of(null).pipe(
            tap(() => this.isLoading = true),
            switchMap(() => this._serviceAPI.GetProductByID(this.productID)),
            tap(model => this.model = model),
            tap(() => this.isLoading = false),
        ).subscribe({
            error: () => {
                alert('Ошибка');
            }
        });
    }
}
