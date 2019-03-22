// The Product Module contains components established in relation to various functionalities related to products
// Core Dependencies for product module 
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// configuration and services
import { ProductRoutes } from "./product.routing";

// Components
import { CheckoutModule } from "./checkout/checkout.module";
import { ProductComponent } from "./product.component";
import { ProductGalleryComponent } from "./product-gallery/product-gallery.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { SharedModule } from "../../shared/shared.module";
import { CartProductsComponent } from "./cart-products/cart-products.component";
import { CartCalculatorComponent } from "./cart-calculator/cart-calculator.component";

@NgModule({
	imports: [CommonModule, RouterModule.forChild(ProductRoutes), SharedModule, CheckoutModule,RouterModule],
	declarations: [
		ProductComponent,
		ProductGalleryComponent,
		ProductDetailComponent,
		CartProductsComponent,
		CartCalculatorComponent
	],
	exports: [ProductGalleryComponent]
})
export class ProductModule { }
