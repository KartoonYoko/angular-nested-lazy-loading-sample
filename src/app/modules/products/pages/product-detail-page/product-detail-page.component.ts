import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss'
})
export class ProductDetailPageComponent {
    public id: string = '';
    constructor(
        private readonly _activeRoute: ActivatedRoute,
    ) {
        this.id = this._activeRoute.snapshot.params['id'];
    }
}
