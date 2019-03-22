import { CheckoutComponent } from './checkout.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const checkoutRoutes: Routes = [
	{
		path: 'checkouts',
		component: CheckoutComponent,
	
		children: [
			{
				path: '',
				component: ProductsComponent,
				outlet: 'checkOutlet'
			},
			
		
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(checkoutRoutes) ],
	exports: [ RouterModule ]
})
export class CheckoutRoutingModule {}
