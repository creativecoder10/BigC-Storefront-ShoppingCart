import { Product } from '../../../shared/models/product';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';
@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
	private sub: any;
	product: Product;
	public quantity: number;

	constructor(
		private route: ActivatedRoute,
		private productService: ProductService,
	) { }

	ngOnInit() {
		this.sub = this.route.params.subscribe((params) => {
			const title = params['title']; // (+) converts string 'id' to a number
			this.productService.listen('records', (data) => {
				if (data) {
					this.getProductDetail(title);
				}

			})

		});
	}
	/**
	 * This method will provide the details of a specific product being clicked 
	 * @param id id of the product
	 */
	getProductDetail(title: string) {
		// this.spinnerService.show();
		const x = this.productService.getProductByTitle(title);
		this.product = x;

		this.quantity = this.product.quantity || 1;
	}




	addToCart(product: Product) {
		this.product.quantity = this.quantity;
		this.productService.addToCart2(this.product);


	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	quantityChange(event: any) {
		if (event === 'add') {
			this.addQuantity();
		} else {
			if (event === 'subtract') {
				this.subtractQuantity();
			}
		}

	}
	addQuantity() {
		this.quantity++;
	}

	subtractQuantity() {
		if (this.quantity > 1) {
			this.quantity--;
		}
	}
}
