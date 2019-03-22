import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { RouterService } from "../../../shared/services/router.service";
import { toArray } from 'rxjs/operators';

@Component({
	selector: 'product-gallery',
	templateUrl: './product-gallery.component.html',
	styleUrls: ['./product-gallery.component.scss']
})
export class ProductGalleryComponent implements OnInit {
	Products: Product[] = [];
	public model: any = {};
	options: any;
	loading = false;
	constructor(
		private productService: ProductService,
		private routerService: RouterService
	) { }

	ngOnInit() {
		this.model=[];
		this.getAllProducts();
	}

	/**
	 * Get all the products recived from api call / product.json 
	 */
	getAllProducts() {
		this.loading = true;
		const x = this.productService.getResponseData();
		x.then((data) => {
			this.model = [];
			console.log("data",data);
			let response = data.data;
			console.log("res",response);

			let props = Object.keys(response);
			for (let prop of props) {
				this.model.push(response[prop]);
			}
		});

	}

	/**
	 
	 * @param product product required to be added to cart 
	 * add the product in the cart 
	 */
	addToCart(product: Product) {
		this.productService.addToCart2(product);
	}

	/**
	 * Open product details page for a particular produt
	 * @param suburl url of product required to navigate to 
	 * @param product product for which we want to opn the product details 
	 */

	gotoProduct(suburl: any, product: any) {
		const path = suburl + product;
		this.routerService.navigate(path);
	}
}
