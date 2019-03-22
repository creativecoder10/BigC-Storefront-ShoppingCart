import { CartProductsComponent } from './cart-products/cart-products.component';
import { Routes } from '@angular/router';
import { IndexComponent } from '../../index/index.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const ProductRoutes: Routes = [
	{
		path: 'products',
		children: [
			{
				path: '',
				component: IndexComponent
			},
			
			
			{
				path: 'cart-items',
				component: CartProductsComponent
			},
			{
				path: 'checkouts',
				loadChildren: './checkout/checkout.module#CheckoutModule'
			},
			{
				path: 'product/:title',
				component: ProductDetailComponent
			}
		]
	}
];
