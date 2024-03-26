import { Component } from '@angular/core';
import { ProductListItemModel } from '../../pages/product-list-page/product-list-page.models';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
    list: ProductListItemModel[] = [
        {
            id: "081fc8e1-d76f-4dd4-ad78-7e9310a0725c",
            name: "Soprano Sofa",
            created: "2015-05-22T14:56:29.000Z",
        },
        {
            id: "2a792534-844c-45bc-b61b-cdd211273d24",
            name: "Bork",
            created: "2015-05-22T14:56:29.000Z",
        },
    ];
}
