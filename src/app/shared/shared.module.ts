/**
 * Details of some of the external libaries and their use 
 * MDB
 * AngularFire
 * Angularfire
 * Owl
 * PaginationModule- External Module - The simplest solution for pagination in Angular.
 * Httpclient
 * FirebaseConfig
 * 
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NoProductsFoundComponent } from "./components/no-products-found/no-products-found.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule, FormBuilder } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";
import { OwlModule } from "ngx-owl-carousel";
import { NgxPaginationModule } from "ngx-pagination";
import { HttpClientModule } from "@angular/common/http";
import { AgmCoreModule } from "@agm/core";
import { CartCheckoutComponent } from "./components/cart-checkout/cart-checkout.component";
import { CartCheckoutSmallComponent } from "./components/cart-checkout-small/cart-checkout-small.component";
import { ProductCounterComponent } from "./components/product-counter/product-counter.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { FilterByBrandPipe } from "./pipes/filterByBrand.pipe";
import { FilterByCategoryPipe } from "./pipes/filterByCategory.pipe";
import { FilterByPricePipe } from "./pipes/filterByPrice.pipe";
import { ProductService } from "./services/product.service";
import { ProductService1 } from "./services/product.service1";
import { SettingsService } from "./services/settings.service";
import { NgxContentLoadingModule } from "ngx-content-loading";
// import { CardLoaderComponent } from "./components/card-loader/card-loader.component";
import { MomentTimeAgoPipe } from "./pipes/moment-time-ago.pipe";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CdkTableModule } from "@angular/cdk/table";
import { CdkTreeModule } from "@angular/cdk/tree";
@NgModule({
	imports: [
		CommonModule,
		MDBBootstrapModule.forRoot(),
		FormsModule,
		HttpClientModule,
		RouterModule,
		OwlModule,
		NgxPaginationModule,
		AgmCoreModule.forRoot({
			apiKey: "AIzaSyDMbxW3MlwUP2vrAZVJyu7pYqZa1LthvTE"
		}),
		NgxContentLoadingModule
	],
	declarations: [
		NoProductsFoundComponent,
		FilterByBrandPipe,
		FilterByCategoryPipe,
		FilterByPricePipe,
		CartCheckoutComponent,
		ProductCounterComponent,
		CartCheckoutSmallComponent,
		PageNotFoundComponent,
		// CardLoaderComponent,
		MomentTimeAgoPipe
	],
	exports: [
		NoProductsFoundComponent,
		FormsModule,
		MDBBootstrapModule,
		FormsModule,
		RouterModule,
		OwlModule,
		NgxPaginationModule,
		FilterByBrandPipe,
		FilterByCategoryPipe,
		FilterByPricePipe,
		AgmCoreModule,
		CartCheckoutComponent,
		CartCheckoutSmallComponent,
		ProductCounterComponent,
		PageNotFoundComponent,
		MomentTimeAgoPipe,
		NgxContentLoadingModule,
		// CardLoaderComponent,
		CdkTableModule,
		CdkTreeModule,
		DragDropModule, ScrollingModule
	],
	providers: [ProductService, ProductService1, FormBuilder, SettingsService]
})
export class SharedModule { }
