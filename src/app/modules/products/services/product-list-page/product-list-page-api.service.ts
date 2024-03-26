import { Injectable } from "@angular/core";
import { Observable, of, delay, switchMap } from "rxjs";
import { ProductListItemModel } from "../../pages/product-list-page/product-list-page.models";

@Injectable({
    providedIn: 'root'
})
export class ProductListPageAPIService {

    // GetProductList имитирует реальный запрос к серверу
    public GetProductList(): Observable<ProductListItemModel[]> {
        const list: ProductListItemModel[] = [
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

        return of(null).pipe(
            delay(2000),
            switchMap(() => of(list))
        );
    }
      
}

